"use client";

import { editEducations } from "@/backend/resume-actions";
import { Button } from "@/components/button";
import { useActionState, useEffect, useState } from "react";
import { BoundaryFrom } from "../ui/boundary-form";
import { Education } from "@/types/resume";

export default function EditEducationForm({
  project,
  slug,
}: {
  project: Education;
  slug: string;
}) {
  const initialState = { message: "", errors: {} };
  /**
   * 동적 라우팅에서 받은 id에 매칭되는 데이터를 DB에서 받아옵니다.
   * 추출 된 값을 editCertificate 함수에 바인딩하여 해당 데이터를 수정합니다.
   */

  const editProject = editEducations.bind(null, project.id);

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
              <label htmlFor="school">school</label>
              <input
                type="text"
                id="school"
                name="school"
                defaultValue={project.school}
                placeholder="school"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="degree">degree</label>
              <input
                type="text"
                id="degree"
                name="degree"
                defaultValue={project.degree}
                placeholder="degree"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="institution">institution</label>
              <input
                type="text"
                id="institution"
                name="institution"
                defaultValue={project.institution}
                placeholder="institution"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="date">date</label>
              <input
                type="text"
                id="date"
                name="date"
                defaultValue={project.date}
                placeholder="date"
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
