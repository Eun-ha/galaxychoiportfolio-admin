"use client";

import {
  createMain,
  createSkill,
  MainState,
  SkillState,
} from "@/backend/main-actions";
import {
  CertificateState,
  createCertificate,
  createDescriptions,
  createEducations,
  createExperiences,
  DescriptionState,
  EducationState,
  ExperienceState,
} from "@/backend/resume-actions";
import { createWork, WorkState } from "@/backend/work-actions";
import { Button } from "@/components/button";
import { BoundaryFrom } from "@/components/ui/boundary-form";
import { useActionState, useEffect, useState } from "react";

type Props = {
  slug: string;
};

export default function CreateForm(props: Props) {
  const { slug } = props;

  type Slug =
    | "certificates"
    | "experiences"
    | "educations"
    | "work"
    | "descriptions"
    | "skill"
    | "main";

  type StateMap = {
    certificates: CertificateState;
    experiences: ExperienceState;
    educations: EducationState;
    work: WorkState;
    descriptions: DescriptionState;
    main: MainState;
    skill: SkillState;
  };

  function getActionFunction<K extends Slug>(
    slug: K
  ): (state: StateMap[K], payload: FormData) => Promise<StateMap[K]> {
    const map: {
      [key in Slug]: (
        state: StateMap[key],
        payload: FormData
      ) => Promise<StateMap[key]>;
    } = {
      certificates: createCertificate,
      experiences: createExperiences,
      educations: createEducations,
      work: createWork,
      descriptions: createDescriptions,
      main: createMain,
      skill: createSkill,
    };

    return map[slug];
  }

  const actionFunction = getActionFunction(slug as Slug);

  if (!actionFunction) {
    throw new Error(`No action function found for slug: ${slug}`);
  }

  const initialState = { errors: {}, message: "" };
  const [actionState, formAction, isPending] = useActionState(
    actionFunction,
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

  const [inputs, setInputs] = useState<string[]>([]);

  const addInput = () => {
    setInputs([...inputs, ""]); // 새 인풋 추가
  };

  const removeInput = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1); // 해당 인덱스의 input 제거
    setInputs(newInputs);
  };

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <form action={formAction}>
      <div className="w-full">
        <BoundaryFrom>
          {slug === "certificates" ? (
            <>
              <div className="w-full flex mb-3">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="date">date</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="date"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="authority">authority</label>
                <input
                  type="text"
                  id="authority"
                  name="authority"
                  placeholder="authority"
                  required
                />
              </div>
            </>
          ) : slug === "educations" ? (
            <>
              <div className="w-full flex mb-3">
                <label htmlFor="name">school</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  placeholder="school"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="authority">degree</label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  placeholder="degree"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="authority">institution</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  placeholder="institution"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="date">date</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="date"
                  required
                />
              </div>
            </>
          ) : slug === "experiences" ? (
            <>
              <div className="w-full flex mb-3">
                <label htmlFor="company">company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="company"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="date">date</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="date"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="description">description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="description"
                  required
                />
              </div>
            </>
          ) : slug === "descriptions" ? (
            <>
              <div className="w-full flex mb-3">
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="date">date</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="date"
                  required
                />
              </div>

              <div className="w-full flex mb-3">
                <label htmlFor="performance">performance</label>
                <input
                  type="text"
                  id="performance"
                  name="performance"
                  placeholder="performance"
                  required
                />
                <button
                  type="button"
                  onClick={addInput}
                  className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                >
                  입력 추가
                </button>

                {inputs.map((value, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="border border-gray-300 px-2 py-1 rounded mr-2"
                      id="performance"
                      name="performance"
                      placeholder="performance"
                    />
                    <button
                      type="button"
                      onClick={() => removeInput(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      제거
                    </button>
                  </div>
                ))}
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="role">role</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="role"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="skills">skills</label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  placeholder="skills"
                  required
                />
              </div>
            </>
          ) : slug === "work" ? (
            <>
              <div className="w-full flex mb-3">
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="description">description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="description"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="skill">skill</label>
                <input
                  type="text"
                  id="skill"
                  name="skill"
                  placeholder="skill"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="path">path</label>
                <input
                  type="text"
                  id="path"
                  name="path"
                  placeholder="path"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="url">url</label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  placeholder="url"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="download">download</label>
                <input
                  type="text"
                  id="download"
                  name="download"
                  placeholder="download"
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="git">git</label>
                <input type="text" id="git" name="git" placeholder="git" />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="index">index</label>
                <input
                  type="text"
                  id="index"
                  name="index"
                  placeholder="index"
                />
              </div>
            </>
          ) : slug === "main" ? (
            <>
              <div className="w-full flex mb-3">
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="content1">content1</label>
                <input
                  type="text"
                  id="content1"
                  name="content1"
                  placeholder="content1"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="content2">content2</label>
                <input
                  type="text"
                  id="content2"
                  name="content2"
                  placeholder="content2"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="description">description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="description"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="description2">description2</label>
                <input
                  type="text"
                  id="description2"
                  name="description2"
                  placeholder="description2"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="description3">description3</label>
                <input
                  type="text"
                  id="description3"
                  name="description3"
                  placeholder="description3"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="button">button</label>
                <input
                  type="text"
                  id="button"
                  name="button"
                  placeholder="button"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="path">path</label>
                <input
                  type="text"
                  id="path"
                  name="path"
                  placeholder="path"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="alt">alt</label>
                <input type="text" id="alt" name="alt" placeholder="alt" />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="url">url</label>
                <input type="text" id="url" name="url" placeholder="url" />
              </div>
            </>
          ) : slug === "skill" ? (
            <>
              <div className="w-full flex mb-3">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="color">color</label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  placeholder="color"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="skills">skills</label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  placeholder="skills"
                  required
                />
              </div>
              <div className="w-full flex mb-3">
                <label htmlFor="angle">angle</label>
                <input
                  type="text"
                  id="angle"
                  name="angle"
                  placeholder="angle"
                  required
                />
              </div>
            </>
          ) : (
            <></>
          )}
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
        {isPending ? "대기중..." : "완료"}
      </Button>
    </form>
  );
}
