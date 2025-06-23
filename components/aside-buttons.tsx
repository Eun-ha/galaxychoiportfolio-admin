import { AsideButtonList } from "./resume/aside-button-list";
import { Aside } from "@/types/resume";
import { asideButtons } from "@/data/resume";

type Props = {
  path: string;
};

export async function AsideButtons(props: Props) {
  const path = props.path;
  return (
    <>
      <AsideButtonList
        path={path}
        categories={[
          ...asideButtons.map((x: Aside) => ({
            button: x.button,
            slug: x.slug,
          })),
          ...(path === "/admin"
            ? [
                { button: "work", slug: "work" },
                { button: "main", slug: "main" },
                { button: "skill", slug: "skill" },
              ]
            : []),
        ]}
      />
    </>
  );
}
