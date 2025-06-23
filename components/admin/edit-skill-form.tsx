"use client";

import { Button } from "@/components/button";
import { useActionState, useEffect, useState } from "react";
import { BoundaryFrom } from "../ui/boundary-form";
import { Skill } from "@/types/main";
import { editSkill } from "@/backend/main-actions";

export default function EditSkillForm({
  project,
  slug,
}: {
  project: Skill;
  slug: string;
}) {
  const initialState = { message: "", errors: {} };
  /**
   * 동적 라우팅에서 받은 id에 매칭되는 데이터를 DB에서 받아옵니다.
   * 추출 된 값을 editCertificate 함수에 바인딩하여 해당 데이터를 수정합니다.
   */

  const editProject = editSkill.bind(null, project.id);

  if (!editProject) {
    throw new Error(`No edit function found for slug: ${slug}`);
  }
  const [actionState, formAction, isPending] = useActionState(
    editProject,
    initialState
  );

  const [isErrorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (actionState !== null) {
      setErrorMessage(true);

      const timer = setTimeout(() => {
        setErrorMessage(false);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      setErrorMessage(false);
    }
  }, [actionState]);

  return (
    <form action={formAction}>
      <div className="w-full">
        <BoundaryFrom>
          <>
            <div className="w-full flex mb-3">
              <label htmlFor="name">name</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={project.name}
                placeholder="name"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="color">color</label>
              <input
                type="text"
                id="color"
                name="color"
                defaultValue={project.color}
                placeholder="color"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="skills">skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                defaultValue={project.skills}
                placeholder="skills"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="angle">angle</label>
              <input
                type="text"
                id="angle"
                name="angle"
                defaultValue={project.angle}
                placeholder="angle"
              />
            </div>
          </>
        </BoundaryFrom>
      </div>
      {isErrorMessage ? (
        <span className="block text-point-red mb-3">
          {typeof actionState === "string" ? actionState : actionState?.message}
        </span>
      ) : (
        ""
      )}
      <Button type="submit" aria-label="폼 전송 버튼" aria-disabled={isPending}>
        {isPending ? "대기중..." : "수정"}
      </Button>
    </form>
  );
}
