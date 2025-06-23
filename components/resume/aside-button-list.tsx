"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { AsideButton } from "./aside-button";

export type Categories = {
  button: string;
  slug?: string;
  segment?: string;
};

export const AsideButtonList = ({
  path,
  categories,
}: {
  path: string;
  categories: Categories[];
}) => {
  const [stickyClass, setStickyClass] = useState(false);

  const stickNavbar = () => {
    const windowHeight = window.scrollY;
    return windowHeight > 80 ? setStickyClass(true) : setStickyClass(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.addEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <aside
      className={clsx(
        "z-10 flex place-content-evenly lg:block lg:place-content-start lg:shrink-0 lg:w-[200px] rounded-lg bg-bg-active lg:bg-transparent",
        {
          "fixed-none": !stickyClass,
          "fixed left-0 top-0 w-full bg-bg-default lg:fixed-none lg:static":
            stickyClass,
        }
      )}
    >
      {categories.map((category) => (
        <AsideButton
          key={path + category.slug}
          category={category}
          path={path}
        />
      ))}
    </aside>
  );
};
