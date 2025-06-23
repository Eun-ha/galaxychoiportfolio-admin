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
              content1
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              content2
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              description
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              description2
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              description3
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              button
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              path
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              alt
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              url
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
              <td className="px-6 py-4 whitespace-no-wrap">{data.content1}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.content2}</td>

              <td className="px-6 py-4 whitespace-no-wrap">
                {data.description}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {data.description2}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {data.description3}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.button}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.path}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.alt}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{data.url}</td>

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
