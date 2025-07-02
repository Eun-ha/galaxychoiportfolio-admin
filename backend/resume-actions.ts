"use server";

import {
  Certificate,
  Description,
  Experience,
  Education,
} from "@/types/resume";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";

export async function getCertificatesData(): Promise<Certificate[]> {
  try {
    const { rows }: { rows: Certificate[] } =
      await sql`SELECT id, name, date, authority FROM certificates_contents ORDER BY date DESC;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getCertificatesData data");
  }
}

export async function getDescriptionsData(): Promise<Description[]> {
  try {
    const { rows }: { rows: Description[] } =
      await sql`SELECT id, title, date, performance, role, skills FROM descriptions_contents ORDER BY date DESC ;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getDescriptionsData data");
  }
}

export async function getExperiencesData(): Promise<Experience[]> {
  try {
    const { rows }: { rows: Experience[] } =
      await sql`SELECT id, company, title, date, description FROM experiences_contents ORDER BY date DESC;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getExperiencesData data");
  }
}

export async function getEducationsData(): Promise<Education[]> {
  try {
    const { rows }: { rows: Education[] } =
      await sql`SELECT id, school, degree, institution, date FROM educations_contents ORDER BY date DESC;`;
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch getEducationsData data");
  }
}

/**
 * Certificates
 */

const CreateCertificateSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  date: z.string().nonempty({ message: "Date is required" }),
  authority: z.string().nonempty({ message: "Authority is required" }),
});

export type CertificateState = {
  errors?: {
    name?: string[];
    date?: string[];
    authority?: string[];
  };
  message?: string;
};

export async function createCertificate(
  preState: CertificateState,
  formData: FormData
) {
  const validatedFields = CreateCertificateSchema.safeParse({
    name: formData.get("name"),
    date: formData.get("date"),
    authority: formData.get("authority"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    const existingCertificate =
      await sql`SELECT * FROM certificates_contents WHERE name = ${validatedFields.data.name};`;
    if (existingCertificate.rows.length > 0) {
      return {
        message: "Certificate already exists",
      };
    }
  } catch (error) {
    return {
      message: "Database error during Certificate validation",
    };
  }

  try {
    await sql`
      INSERT INTO certificates_contents (name, date, authority)
      VALUES (${validatedFields.data.name}, ${validatedFields.data.date}, ${validatedFields.data.authority});
    `;

    revalidatePath("/admin/certificates");
    revalidatePath("/resume/certificates");
  } catch (error) {
    return {
      message: "Failed to create Certificate",
    };
  }

  redirect("/admin/certificates");
}

export async function deleteCertificate(id: string): Promise<{
  message: string;
}> {
  try {
    await sql`DELETE FROM certificates_contents WHERE id = ${id};`;
    revalidatePath("/admin/certificates");
    revalidatePath("/resume/certificates");

    return {
      message: "Certificate deleted successfully",
    };
  } catch (error) {
    return {
      message: "Failed to delete Certificate",
    };
  }
}

export async function editCertificate(
  id: string | undefined,
  preState: CertificateState,
  formData: FormData
) {
  if (id === undefined) window.confirm("id is undefined");
  const validatedFields = CreateCertificateSchema.safeParse({
    name: formData.get("name"),
    date: formData.get("date"),
    authority: formData.get("authority"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    await sql`
      UPDATE certificates_contents SET name = ${validatedFields.data.name}, date = ${validatedFields.data.date}, authority = ${validatedFields.data.authority} WHERE id = ${id}
    `;
    revalidatePath("/admin/certificates");
    revalidatePath("/resume/certificates");
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to edit Certificate",
    };
  }
  redirect("/admin/certificates");
}

/**
 * Educations
 */

const CreateEducationsSchema = z.object({
  school: z.string().nonempty({ message: "school is required" }),
  degree: z.string(),
  institution: z.string(),
  date: z.string().nonempty({ message: "date is required" }),
});

export type EducationState = {
  errors?: {
    school?: string[];
    degree?: string[];
    institution?: string[];
    date?: string[];
  };
  message?: string;
};

export async function createEducations(
  preState: EducationState,
  formData: FormData
) {
  const validatedFields = CreateEducationsSchema.safeParse({
    school: formData.get("school"),
    degree: formData.get("degree"),
    institution: formData.get("institution"),
    date: formData.get("date"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    const existingEducation =
      await sql`SELECT * FROM educations_contents WHERE school = ${validatedFields.data.school};`;
    if (existingEducation.rows.length > 0) {
      return {
        message: "Education already exists",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Database error during Education validation",
    };
  }

  try {
    await sql`
      INSERT INTO educations_contents (school, degree, institution, date)
      VALUES (${validatedFields.data.school}, ${validatedFields.data.degree}, ${validatedFields.data.institution}, ${validatedFields.data.date});
    `;
    revalidatePath("/admin/educations");
    revalidatePath("/resume/educations");
  } catch (error) {
    return {
      message: "Failed to create Education",
    };
  }
  redirect("/admin/educations");
}

export async function editEducations(
  id: string | undefined,
  preState: EducationState,
  formData: FormData
) {
  if (id === undefined) window.confirm("id is undefined");
  const validatedFields = CreateEducationsSchema.safeParse({
    school: formData.get("school"),
    degree: formData.get("degree"),
    institution: formData.get("institution"),
    date: formData.get("date"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    await sql`
      UPDATE educations_contents SET school = ${validatedFields.data.school}, degree = ${validatedFields.data.degree}, institution = ${validatedFields.data.institution}, date = ${validatedFields.data.date} WHERE id = ${id}
    `;
    revalidatePath("/admin/educations");
    revalidatePath("/resume/educations");
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to edit educations",
    };
  }
  redirect("/admin/educations");
}

export async function deleteEducation(id: string): Promise<{
  message: string;
}> {
  console.log("deleteEducation");
  try {
    await sql`DELETE FROM educations_contents WHERE id = ${id};`;
    revalidatePath("/admin/educations");
    revalidatePath("/resume/educations");
    return {
      message: "Education deleted successfully",
    };
  } catch (error) {
    return {
      message: "Failed to delete Education",
    };
  }
}

/**
 * Experience
 */

const CreateExperienceSchema = z.object({
  company: z.string().nonempty({ message: "company is required" }),
  title: z.string().nonempty({ message: "title is required" }),
  date: z.string().nonempty({ message: "Date is required" }),
  description: z.string().nonempty({ message: "description is required" }),
});

export type ExperienceState = {
  errors?: {
    company?: string[];
    title?: string[];
    date?: string[];
    description?: string[];
  };
  message?: string;
};

export async function createExperiences(
  preState: ExperienceState,
  formData: FormData
) {
  const validatedFields = CreateExperienceSchema.safeParse({
    company: formData.get("company"),
    title: formData.get("title"),
    date: formData.get("date"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    const existingExperience =
      await sql`SELECT * FROM experiences_contents WHERE company = ${validatedFields.data.company};`;
    if (existingExperience.rows.length > 0) {
      return {
        message: "Experience already exists",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Database error during Experience validation",
    };
  }

  try {
    await sql`
      INSERT INTO experiences_contents (company, title, date, description)
      VALUES (${validatedFields.data.company}, ${validatedFields.data.title}, ${validatedFields.data.date}, ${validatedFields.data.description});
    `;
    revalidatePath("/admin/experiences");
    revalidatePath("/resume/experiences");
  } catch (error) {
    return {
      message: "Failed to create Experience",
    };
  }
  redirect("/admin/experiences");
}

export async function editExperiences(
  id: string | undefined,
  preState: ExperienceState,
  formData: FormData
) {
  if (id === undefined) window.confirm("id is undefined");
  const validatedFields = CreateExperienceSchema.safeParse({
    company: formData.get("company"),
    title: formData.get("title"),
    date: formData.get("date"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    await sql`
      UPDATE experiences_contents SET company = ${validatedFields.data.company}, title = ${validatedFields.data.title}, date = ${validatedFields.data.date}, description = ${validatedFields.data.description} WHERE id = ${id}
    `;
    revalidatePath("/admin/experiences");
    revalidatePath("/resume/experiences");
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to edit Experience",
    };
  }
  redirect("/admin/experiences");
}
export async function deleteExperience(id: string): Promise<{
  message: string;
}> {
  try {
    await sql`DELETE FROM experiences_contents WHERE id = ${id};`;
    revalidatePath("/admin/experiences");
    revalidatePath("/resume/experiences");

    return {
      message: "Experience deleted successfully",
    };
  } catch (error) {
    return {
      message: "Failed to delete Experience",
    };
  }
}

/**
 * descriptions
 */

const CreateDescriptionSchema = z.object({
  title: z.string().nonempty({ message: "title is required" }),
  date: z.string().nonempty({ message: "Date is required" }),
  performance: z
    .array(z.string())
    .min(1, { message: "At least one tag is required" }),
  role: z.string().nonempty({ message: "role is required" }),
  skills: z.string().nonempty({ message: "skills is required" }),
});

export type DescriptionState = {
  errors?: {
    title?: string[];
    date?: string[];
    performance?: string[];
    role?: string[];
    skills?: string[];
  };
  message?: string;
};

export async function createDescriptions(
  preState: DescriptionState,
  formData: FormData
) {
  const validatedFields = CreateDescriptionSchema.safeParse({
    title: formData.get("title"),
    date: formData.get("date"),
    performance: formData.getAll("performance"),
    role: formData.get("role"),
    skills: formData.get("skills"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    const existingDescription =
      await sql`SELECT * FROM descriptions_contents WHERE title = ${validatedFields.data.title};`;
    if (existingDescription.rows.length > 0) {
      return {
        message: "Description already exists",
      };
    }
  } catch (error) {
    return {
      message: "Database error during Description validation",
    };
  }

  try {
    const performanceArray = validatedFields.data.performance;
    const formattedArray = `{${performanceArray.map((item) => `"${item}"`).join(",")}}`;
    await sql`
      INSERT INTO descriptions_contents (title, date, performance, role, skills)
      VALUES (${validatedFields.data.title}, ${validatedFields.data.date}, ${formattedArray}, ${validatedFields.data.role}, ${validatedFields.data.skills});
    `;
    revalidatePath("/admin/descriptions");
    revalidatePath("/resume/descriptions");
  } catch (error) {
    return {
      message: "Failed to create Description",
    };
  }
  redirect("/admin/descriptions");
}
export async function editDescriptions(
  id: string | undefined,
  preState: DescriptionState,
  formData: FormData
) {
  if (id === undefined) window.confirm("id is undefined");
  const validatedFields = CreateDescriptionSchema.safeParse({
    title: formData.get("title"),
    date: formData.get("date"),
    performance: formData.getAll("performance"),
    role: formData.get("role"),
    skills: formData.get("skills"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  try {
    const performanceArray = validatedFields.data.performance;
    const formattedArray = `{${performanceArray.map((item) => `"${item}"`).join(",")}}`;
    await sql`
      UPDATE descriptions_contents SET title = ${validatedFields.data.title}, date = ${validatedFields.data.date}, performance = ${formattedArray}, role = ${validatedFields.data.role}, skills = ${validatedFields.data.skills} WHERE id = ${id}
    `;
    revalidatePath("/admin/descriptions");
    revalidatePath("/resume/descriptions");
  } catch (error) {
    return {
      message: "Failed to edit Description",
    };
  }
  redirect("/admin/descriptions");
}

export async function deleteDescriptions(id: string): Promise<{
  message: string;
}> {
  try {
    await sql`DELETE FROM descriptions_contents WHERE id = ${id};`;
    revalidatePath("/admin/descriptions");
    revalidatePath("/resume/descriptions");

    return {
      message: "Description deleted successfully",
    };
  } catch (error) {
    return {
      message: "Failed to delete Description",
    };
  }
}
