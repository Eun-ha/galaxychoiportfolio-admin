"use client";

import { Main } from "@/types/main";
import { BoundaryButton } from "../ui/boundary-button";
import { DeleteData, EditData } from "./buttons";

type Props = {
  slug: string;
  data: Main[];
};

export const AdminMain = (props: Props) => {
  const { slug, data } = props;

  return (
    <div className="w-full overflow-x-scroll rounded-lg border border-border bg-card shadow-md">
      <table className="min-w-full text-sm">
        <thead className="sticky top-0 z-10 bg-darkOnly-bg text-darkOnly-text">
          <tr>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">ID</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">title</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">content1</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">content2</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">description</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">description2</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">description3</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">button</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">path</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">alt</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">url</th>
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">버튼</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, id) => (
            <tr key={id} className={id % 2 === 0 ? "bg-darkOnly-active" : "bg-transparent"}>
              <td className="px-4 py-2 whitespace-nowrap">{data.id}</td>
              <td className="px-4 py-2 whitespace-nowrap">{data.title}</td>
              <td className="px-4 py-2 whitespace-nowrap">{data.content1}</td>
              <td className="px-4 py-2 whitespace-nowrap">{data.content2}</td>
              <td className="px-4 py-2 whitespace-nowrap">{data.description}</td>
              <td className="px-4 py-2 whitespace-nowrap">{data.description2}</td>
              <td className="px-4 py-2 whitespace-nowrap">{data.description3}</td>
              <td className="px-4 py-2 whitespace-nowrap">{data.button}</td>
              <td className="px-4 py-2 whitespace-nowrap">{data.path}</td>
              <td className="px-4 py-2 whitespace-nowrap">{data.alt}</td>
              <td className="px-4 py-2 whitespace-nowrap">{data.url}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <BoundaryButton>
                  {data.id && <EditData slug={slug} id={data.id} />}
                  {data.id && <DeleteData slug={slug} id={data.id} />}
                </BoundaryButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
