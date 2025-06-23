"use client";

import { Button } from "@/components/button";
import { useActionState, useEffect, useState } from "react";
import { BoundaryFrom } from "../ui/boundary-form";
import { Main } from "@/types/main";
import { editMain } from "@/backend/main-actions";

export default function EditMainForm({
  project,
  slug,
}: {
  project: Main;
  slug: string;
}) {
  const initialState = { message: "", errors: {} };
  /**
   * 동적 라우팅에서 받은 id에 매칭되는 데이터를 DB에서 받아옵니다.
   * 추출 된 값을 editCertificate 함수에 바인딩하여 해당 데이터를 수정합니다.
   */

  const editProject = editMain.bind(null, project.id);

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
              <label htmlFor="content1">content1</label>
              <input
                type="text"
                id="content1"
                name="content1"
                defaultValue={project.content1}
                placeholder="content1"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="content2">content2</label>
              <input
                type="text"
                id="content2"
                name="content2"
                defaultValue={project.content2}
                placeholder="content2"
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
              <label htmlFor="description2">description2</label>
              <input
                type="text"
                id="description2"
                name="description2"
                defaultValue={project.description2}
                placeholder="description2"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="description3">description3</label>
              <input
                type="text"
                id="description3"
                name="description3"
                defaultValue={project.description3}
                placeholder="description3"
              />
            </div>
            <div className="w-full flex mb-3">
              <label htmlFor="button">button</label>
              <input
                type="text"
                id="button"
                name="button"
                defaultValue={project.button}
                placeholder="button"
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
              <label htmlFor="alt">alt</label>
              <input
                type="text"
                id="alt"
                name="alt"
                defaultValue={project.alt}
                placeholder="alt"
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
