"use client";

import { editCertificate } from "@/backend/resume-actions";
import { Button } from "@/components/button";
import { useActionState, useEffect, useState } from "react";
import { BoundaryFrom } from "../ui/boundary-form";
import { Certificate } from "@/types/resume";

export default function EditCertificateForm({
  project,
  slug,
}: {
  project: Certificate;
  slug: string;
}) {
  const initialState = { message: "", errors: {} };
  /**
   * 동적 라우팅에서 받은 id에 매칭되는 데이터를 DB에서 받아옵니다.
   * 추출 된 값을 editCertificate 함수에 바인딩하여 해당 데이터를 수정합니다.
   */

  const editProject = editCertificate.bind(null, project.id);

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
    <form action={formAction} className="w-full">
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
              <label htmlFor="date">date</label>
              <input
                type="text"
                id="date"
                name="date"
                defaultValue={project.date}
                placeholder="date"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="authority">authority</label>
              <input
                type="text"
                id="authority"
                name="authority"
                defaultValue={project.authority}
                placeholder="authority"
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
