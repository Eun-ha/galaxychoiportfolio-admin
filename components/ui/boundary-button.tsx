import clsx from "clsx";
import React from "react";

type Category = {
  children: React.ReactNode;
  theme?: "dark" | "default";
};

export const BoundaryButton = (Props: Category) => {
  const { children, theme = "dark" } = Props;

  return (
    <div
      className={clsx(
        "inline-block mt-3 [&_*]:inline-block [&_*]:px-4 [&_*]:py-1 [&_*]:no-underline [&_*]:bg-bg-active [&_*]:rounded-lg hover:[&_*]:bg-bg-hover focus-visible:[&_*]:bg-bg-hover [&_*]:border [&_*]:border-border [&_*]:ml-2 first:[&_*]:ml-0 aria-disabled:[&_*]:cursor-not-allowed aria-disabled:[&_*]:opacity-50",
        {
          "mt-4 [&_*]:text-darkOnly-text [&_*]:border [&_*]:border-darkOnly-border [&_*]:bg-darkOnly-active hover:[&_*]:bg-darkOnly-hover focus-visible:[&_*]:bg-darkOnly-hover":
            theme === "dark",
        }
      )}
    >
      {children}
    </div>
  );
};
