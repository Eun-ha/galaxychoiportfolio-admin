"use client";

import Link from "next/link";
import {
  deleteCertificate,
  deleteDescriptions,
  deleteEducation,
  deleteExperience,
} from "@/backend/resume-actions";
import { deleteWork } from "@/backend/work-actions";
import { deleteMain, deleteSkill } from "@/backend/main-actions";

type PropsData = {
  slug: string;
};
export function CreateData(props: PropsData) {
  const { slug } = props;
  return (
    <Link href={`/admin/${slug}/create`} aria-label="Link to create form">
      Create
    </Link>
  );
}

type Props = {
  slug: string;
  id: string;
};
export function EditData(props: Props) {
  const { slug, id } = props;
  return (
    <Link href={`/admin/${slug}/${id}/edit`} aria-label={`Link to ${id}`}>
      Edit
    </Link>
  );
}

export function DeleteData(props: Props) {
  const { slug, id } = props;

  let deleteProject: (arg0: string) => Promise<{
    message: string;
  }>;

  if (slug === "certificates") {
    deleteProject = deleteCertificate;
  } else if (slug === "educations") {
    deleteProject = deleteEducation;
  } else if (slug === "experiences") {
    deleteProject = deleteExperience;
  } else if (slug === "descriptions") {
    deleteProject = deleteDescriptions;
  } else if (slug === "work") {
    deleteProject = deleteWork;
  } else if (slug === "main") {
    deleteProject = deleteMain;
  } else if (slug === "skill") {
    deleteProject = deleteSkill;
  }

  const deleteProjectWithId = async () => {
    if (window.confirm("이 데이터를 정말 삭제하시겠습니까?")) {
      await deleteProject(id);
    }
  };

  return <button onClick={deleteProjectWithId}>Delete</button>;
}
