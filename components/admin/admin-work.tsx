"use client";

import { BoundaryButton } from "../ui/boundary-button";
import { DeleteData, EditData } from "./buttons";
import { Work } from "@/types/work";

type Props = {
  slug: string;
  data: Work[];
};

export const AdminWork = (props: Props) => {
  const { slug, data } = props;

  return (
    <>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              title
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              description
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              skill
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              path
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              url
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              download
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              git
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              index
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              버튼
            </th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((data, id) => (
            <tr key={id}>
              <td className="px-6 py-4 whitespace-no-wrap">{data.id}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.title}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {data.description}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.skill}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.path}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.url}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.download}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.git}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.index}</td>

              <td>
                <BoundaryButton>
                  {data.id && <EditData slug={slug} id={data.id} />}
                  {data.id && <DeleteData slug={slug} id={data.id} />}
                </BoundaryButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
