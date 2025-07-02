import { fetchProjectById } from "@/backend/fetch-data";
import EditCertificateForm from "@/components/admin/edit-certificate-form";
import EditDescriptionForm from "@/components/admin/edit-description-form";
import EditEducationForm from "@/components/admin/edit-education-form";
import EditExperienceForm from "@/components/admin/edit-experience-form";
import EditMainForm from "@/components/admin/edit-main-form";
import EditSkillForm from "@/components/admin/edit-skill-form";
import EditWorkForm from "@/components/admin/edit-work-form";
import {
  isCertificate,
  isDescription,
  isEducation,
  isExperience,
  isMain,
  isSkill,
  isWork,
} from "@/types/admin";
import { notFound } from "next/navigation";
import React from "react";

type tParams = Promise<{ slug: string; id: string }>;

export default async function Page(props: { params: tParams }) {
  const { slug, id } = await props.params;

  let project;

  try {
    project = await fetchProjectById(slug, id);
    if (!project) {
      notFound();
      return; // 프로젝트가 없으면 함수를 종료합니다.
    }
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error(error.message);
    }
    notFound();
    return; // 오류가 발생하면 함수를 종료합니다.
  }

  if (slug === "certificates" && isCertificate(project)) {
    return <EditCertificateForm project={project} slug={slug} />;
  }
  if (slug === "descriptions" && isDescription(project)) {
    return <EditDescriptionForm project={project} slug={slug} />;
  }
  if (slug === "experiences" && isExperience(project)) {
    return <EditExperienceForm project={project} slug={slug} />;
  }
  if (slug === "educations" && isEducation(project)) {
    return <EditEducationForm project={project} slug={slug} />;
  }
  if (slug === "work" && isWork(project)) {
    return <EditWorkForm project={project} slug={slug} />;
  }
  if (slug === "main" && isMain(project)) {
    return <EditMainForm project={project} slug={slug} />;
  }
  if (slug === "skill" && isSkill(project)) {
    return <EditSkillForm project={project} slug={slug} />;
  }
  return null;
}
