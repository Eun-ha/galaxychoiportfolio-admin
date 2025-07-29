"use client";

import { Button } from "@/components/button";
import { useActionState, useEffect, useState } from "react";
import { BoundaryFrom } from "../ui/boundary-form";

import { Work } from "@/types/work";
import { editWork } from "@/backend/work-actions";

export default function EditWorkForm({
  project,
  slug,
}: {
  project: Work;
  slug: string;
}) {
  const initialState = { message: "", errors: {} };
  /**
   * 동적 라우팅에서 받은 id에 매칭되는 데이터를 DB에서 받아옵니다.
   * 추출 된 값을 editCertificate 함수에 바인딩하여 해당 데이터를 수정합니다.
   */

  const editProject = editWork.bind(null, project.id);

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
              <label htmlFor="title">title</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={project.title}
                placeholder="title"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="description">description</label>
              <input
                type="text"
                id="description"
                name="description"
                defaultValue={project.description}
                placeholder="description"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="skill">skill</label>
              <input
                type="text"
                id="skill"
                name="skill"
                defaultValue={project.skill}
                placeholder="skill"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="path">path</label>
              <input
                type="text"
                id="path"
                name="path"
                defaultValue={project.path}
                placeholder="path"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="url">url</label>
              <input
                type="text"
                id="url"
                name="url"
                defaultValue={project.url}
                placeholder="url"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="download">download</label>
              <input
                type="text"
                id="download"
                name="download"
                defaultValue={project.download}
                placeholder="download"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="git">git</label>
              <input
                type="text"
                id="git"
                name="git"
                defaultValue={project.git}
                placeholder="git"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="index">index</label>
              <input
                type="text"
                id="index"
                name="index"
                defaultValue={project.index}
                placeholder="index"
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
