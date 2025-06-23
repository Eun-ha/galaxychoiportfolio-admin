"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Categories } from "./aside-button-list";

export const AsideButton = ({
  path,
  category,
}: {
  path: string;
  category: Categories;
}) => {
  const segment = useSelectedLayoutSegment();
  const href = category.slug ? path + "/" + category.slug : path;

  const isActive =
    (!category.slug && segment === null) ||
    segment === category.segment ||
    segment === category.slug;

  return (
    <Link
      href={href}
      className={clsx(
        "inline-block py-4 lg:pl-4 lg:block lg:rounded-lg lg:hover:bg-bg-hover capitalize",
        {
          "lg:bg-bg-active text-point-red": isActive,
        }
      )}
      aria-label={`Link to ${category.slug}`}
    >
      <span
        className={clsx({
          "p-2 rounded-md bg-amber-950 lg:p-0 lg:bg-transparent": isActive,
        })}
      >
        {category.button}
      </span>
    </Link>
  );
};
