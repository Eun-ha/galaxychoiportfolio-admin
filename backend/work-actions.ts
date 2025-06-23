"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";
import { Work } from "@/types/work";

/**
 * Works
 */

export async function getWorksData(): Promise<Work[]> {
  try {
    const { rows }: { rows: Work[] } =
      await sql`SELECT id, title, description, skill, path, url, download, git, index FROM works_contents ORDER BY path ASC;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getWorksData data");
  }
}

const CreateWorkSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  skill: z.string().nonempty({ message: "Skill is required" }),
  path: z.string().nonempty({ message: "Path is required" }),
  url: z.string().optional(),
  download: z.string().optional(),
  git: z.string().optional(),
  index: z.string().optional(),
});
export type WorkState = {
  errors?: {
    title?: string[];
    description?: string[];
    skill?: string[];
    path?: string[];
    url?: string[];
    download?: string[];
    git?: string[];
    index?: string[];
  };
  message?: string;
};
export async function createWork(preState: WorkState, formData: FormData) {
  const validatedFields = CreateWorkSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    skill: formData.get("skill"),
    path: formData.get("path"),
    url: formData.get("url"),
    download: formData.get("download"),
    git: formData.get("git"),
    index: formData.get("index"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }
  try {
    const existingWork =
      await sql`SELECT * FROM works_contents WHERE title = ${validatedFields.data.title};`;
    if (existingWork.rows.length > 0) {
      return {
        message: "Work already exists",
      };
    }
  } catch (error) {
    return {
      message: "Database error during Work validation",
    };
  }
  try {
    await sql`
      INSERT INTO works_contents (title, description, skill, path, url, download, git, index)
      VALUES (${validatedFields.data.title}, ${validatedFields.data.description}, ${validatedFields.data.skill}, ${validatedFields.data.path}, ${validatedFields.data.url}, ${validatedFields.data.download}, ${validatedFields.data.git}, ${validatedFields.data.index});
    `;
    revalidatePath("/admin/work");
    revalidatePath("/work");
  } catch (error) {
    return {
      message: "Failed to create Work",
    };
  }
  redirect("/admin/work");
}
export async function deleteWork(id: string): Promise<{ message: string }> {
  try {
    await sql`DELETE FROM works_contents WHERE id = ${id};`;
    revalidatePath("/admin/work");
    revalidatePath("/work");

    return {
      message: "Work deleted successfully",
    };
  } catch (error) {
    return {
      message: "Failed to delete Work",
    };
  }
}
export async function editWork(
  id: string | undefined,
  preState: WorkState,
  formData: FormData
) {
  if (id === undefined) window.confirm("id is undefined");
  const validatedFields = CreateWorkSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    skill: formData.get("skill"),
    path: formData.get("path"),
    url: formData.get("url"),
    download: formData.get("download"),
    git: formData.get("git"),
    index: formData.get("index"),
  });
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }
  try {
    await sql`
      UPDATE works_contents SET title = ${validatedFields.data.title}, description = ${validatedFields.data.description}, skill = ${validatedFields.data.skill}, path = ${validatedFields.data.path}, url = ${validatedFields.data.url}, download = ${validatedFields.data.download}, git = ${validatedFields.data.git}, index = ${validatedFields.data.index} WHERE id = ${id}
    `;
    revalidatePath("/admin/work");
    revalidatePath("/work");
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to edit Work",
    };
  }
  redirect("/admin/work");
}
