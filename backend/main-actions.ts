"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";
import { Main, Skill } from "@/types/main";

/**
 * Main
 */

export async function getMainData(): Promise<Main[]> {
  try {
    const { rows }: { rows: Main[] } =
      await sql`SELECT id, title, content1, content2, description, description2, description3, button, path, alt, url FROM main_contents ORDER BY path ASC;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getMainData data");
  }
}

const CreateMainSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  content1: z.string().nonempty({ message: "content1 is required" }),
  content2: z.string().nonempty({ message: "content2 is required" }),
  description: z.string().nonempty({ message: "description is required" }),
  description2: z.string().optional(),
  description3: z.string().optional(),
  button: z.string().nonempty({ message: "button is required" }),
  path: z.string().nonempty({ message: "path is required" }),
  alt: z.string().nonempty({ message: "alt is required" }),
  url: z.string().optional().nullable(),
});

export type MainState = {
  errors?: {
    title?: string[];
    content1?: string[];
    content2?: string[];
    description?: string[];
    description2?: string[];
    description3?: string[];
    button?: string[];
    path?: string[];
    alt?: string[];
    url?: string[];
  };
  message?: string;
};

export async function createMain(preState: MainState, formData: FormData) {
  const validatedFields = CreateMainSchema.safeParse({
    title: formData.get("title"),
    content1: formData.get("content1"),
    content2: formData.get("content2"),
    description: formData.get("description"),
    description2: formData.get("description2"),
    description3: formData.get("description3"),
    button: formData.get("button"),
    path: formData.get("path"),
    alt: formData.get("alt"),
    url: formData.get("url"),
  });
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }
  try {
    const existingWork =
      await sql`SELECT * FROM main_contents WHERE title = ${validatedFields.data.title};`;
    if (existingWork.rows.length > 0) {
      return {
        message: "Main already exists",
      };
    }
  } catch (error) {
    return {
      message: "Database error during Main validation",
    };
  }
  try {
    await sql`
      INSERT INTO main_contents (title, content1, content2, description, description2, description3, button, path, alt, url)
      VALUES (${validatedFields.data.title}, ${validatedFields.data.content1}, ${validatedFields.data.content2}, ${validatedFields.data.description}, ${validatedFields.data.description2}, ${validatedFields.data.description3}, ${validatedFields.data.button}, ${validatedFields.data.path}, ${validatedFields.data.alt}, ${validatedFields.data.url});
    `;
    revalidatePath("/admin/main");
    revalidatePath("/");
  } catch (error) {
    return {
      message: "Failed to create Main",
    };
  }
  redirect("/admin/main");
}
export async function deleteMain(id: string): Promise<{ message: string }> {
  try {
    await sql`DELETE FROM main_contents WHERE id = ${id};`;
    revalidatePath("/admin/main");
    revalidatePath("/");
    return {
      message: "Main deleted successfully",
    };
  } catch (error) {
    return {
      message: "Failed to delete Main",
    };
  }
}
export async function editMain(
  id: string | undefined,
  preState: MainState,
  formData: FormData
) {
  if (id === undefined) window.confirm("id is undefined");

  const validatedFields = CreateMainSchema.safeParse({
    title: formData.get("title"),
    content1: formData.get("content1"),
    content2: formData.get("content2"),
    description: formData.get("description"),
    description2: formData.get("description2"),
    description3: formData.get("description3"),
    button: formData.get("button"),
    path: formData.get("path"),
    alt: formData.get("alt"),
    url: formData.get("url"),
  });
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }
  try {
    await sql`
      UPDATE main_contents SET title = ${validatedFields.data.title}, content1 = ${validatedFields.data.content1}, content2 = ${validatedFields.data.content2}, description = ${validatedFields.data.description}, description2 = ${validatedFields.data.description2}, description3 = ${validatedFields.data.description3}, button = ${validatedFields.data.button}, path = ${validatedFields.data.path}, alt = ${validatedFields.data.alt}, url = ${validatedFields.data.url} WHERE id = ${id}
    `;
    revalidatePath("/admin/main");
    revalidatePath("/");
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to edit Main",
    };
  }
  redirect("/admin/main");
}

/**
 * Skills
 */

export async function getSkillData(): Promise<Skill[]> {
  try {
    const { rows }: { rows: Skill[] } =
      await sql`SELECT id, color::int, skills::int, name, angle::int FROM skill_contents ORDER BY created_at ASC;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getSkillData data");
  }
}

const CreateSkillSchema = z.object({
  color: z.string().nonempty({ message: "color is required" }),
  skills: z.string().nonempty({ message: "skills is required" }),
  name: z.string().nonempty({ message: "name is required" }),
  angle: z.string().nonempty({ message: "angle is required" }),
});
export type SkillState = {
  errors?: {
    color?: string[];
    skills?: string[];
    name?: string[];
    angle?: string[];
  };
  message?: string;
};
export async function createSkill(preState: SkillState, formData: FormData) {
  const validatedFields = CreateSkillSchema.safeParse({
    color: formData.get("color"),
    skills: formData.get("skills"),
    name: formData.get("name"),
    angle: formData.get("angle"),
  });
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }
  try {
    const existingWork =
      await sql`SELECT * FROM skill_contents WHERE name = ${validatedFields.data.name};`;
    if (existingWork.rows.length > 0) {
      return {
        message: "Skill already exists",
      };
    }
  } catch (error) {
    return {
      message: "Database error during Skill validation",
    };
  }
  try {
    await sql`
      INSERT INTO skill_contents (color, skills, name, angle)
      VALUES (${validatedFields.data.color}, ${validatedFields.data.skills}, ${validatedFields.data.name}, ${validatedFields.data.angle});
    `;
    revalidatePath("/admin/skill");
    revalidatePath("/");
  } catch (error) {
    return {
      message: "Failed to create Skill",
    };
  }
  redirect("/admin/skill");
}
export async function deleteSkill(id: string): Promise<{ message: string }> {
  try {
    await sql`DELETE FROM skill_contents WHERE id = ${id};`;
    revalidatePath("/admin/skill");
    revalidatePath("/");
    return {
      message: "Skill deleted successfully",
    };
  } catch (error) {
    return {
      message: "Failed to delete Skill",
    };
  }
}
export async function editSkill(
  id: string | undefined,
  preState: SkillState,
  formData: FormData
) {
  if (id === undefined) window.confirm("id is undefined");

  const validatedFields = CreateSkillSchema.safeParse({
    color: formData.get("color"),
    skills: formData.get("skills"),
    name: formData.get("name"),
    angle: formData.get("angle"),
  });
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }
  try {
    await sql`
      UPDATE skill_contents SET color = ${validatedFields.data.color}, skills = ${validatedFields.data.skills}, name = ${validatedFields.data.name}, angle = ${validatedFields.data.angle} WHERE id = ${id}
    `;
    revalidatePath("/admin/skill");
    revalidatePath("/");
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to edit Skill",
    };
  }
  redirect("/admin/skill");
}
