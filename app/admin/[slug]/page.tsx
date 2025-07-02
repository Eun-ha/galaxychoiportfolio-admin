import { getMainData, getSkillData } from "@/backend/main-actions";
import {
  getCertificatesData,
  getDescriptionsData,
  getEducationsData,
  getExperiencesData,
} from "@/backend/resume-actions";
import { getWorksData } from "@/backend/work-actions";
import { AdminContents } from "@/components/admin/admin-contents";
import { CreateData } from "@/components/admin/buttons";
import { BoundaryButton } from "@/components/ui/boundary-button";
import { Main, Skill } from "@/types/main";
import {
  Certificate,
  Description,
  Education,
  Experience,
} from "@/types/resume";
import { Work } from "@/types/work";

type tParams = Promise<{ slug: string }>;

export default async function Page(props: { params: tParams }) {
  const { slug } = await props.params;

  let data:
    | Description[]
    | Education[]
    | Experience[]
    | Certificate[]
    | Work[]
    | Skill[]
    | Main[] = [];

  if (slug === "certificates") {
    data = await getCertificatesData();
  } else if (slug === "descriptions") {
    data = await getDescriptionsData();
  } else if (slug === "experiences") {
    data = await getExperiencesData();
  } else if (slug === "educations") {
    data = await getEducationsData();
  } else if (slug === "work") {
    data = await getWorksData();
  } else if (slug === "main") {
    data = await getMainData();
  } else if (slug === "skill") {
    data = await getSkillData();
  }

  return (
    <div className="overflow-x-scroll">
      <div>
        <BoundaryButton>
          <CreateData slug={slug} />
        </BoundaryButton>
      </div>
      <AdminContents slug={slug} data={data} />
    </div>
  );
}
