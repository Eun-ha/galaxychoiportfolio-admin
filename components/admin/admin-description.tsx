"use client";
import { Description } from "@/types/resume";
import { BoundaryButton } from "../ui/boundary-button";
import { DeleteData, EditData } from "./buttons";

type Props = {
  slug: string;
  data: Description[];
};

export const AdminDescription = (props: Props) => {
  const { slug, data } = props;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                title
              </th>
              <th className="px-6 py-3text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                date
              </th>
              <th className="px-6 py-3text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                performance
              </th>
              <th className="px-6 py-3text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                role
              </th>
              <th className="px-6 py-3text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                skills
              </th>
              <th className="px-6 py-3text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                버튼
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((data, id) => (
              <tr key={id}>
                <td className="px-6 py-4 whitespace-no-wrap">{data.id}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{data.title}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{data.date}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {data.performance.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{data.role}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{data.skills}</td>
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
      </div>
    </>
  );
};
