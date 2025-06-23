import clsx from "clsx";
import React from "react";

type Category = {
  children: React.ReactNode;
};

export const BoundaryMain = (Props: Category) => {
  const { children } = Props;

  return (
    <div
      className={clsx(
        "text-darkOnly-text [&_h2]:text-xl [&_h2]:text-point-red [&_h3]:text-lg [&_h3]:mt-4 [&_p]:mt-4 [&_span]:text-sm lg:pt-4",
        {}
      )}
    >
      {children}
    </div>
  );
};
