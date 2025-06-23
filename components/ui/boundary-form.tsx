import clsx from "clsx";
import React from "react";

type Category = {
  children: React.ReactNode;
};

export const BoundaryFrom = (Props: Category) => {
  const { children } = Props;

  return (
    <div
      className={clsx(
        "text-darkOnly-text [&_label]:flex-shrink-0 [&_label]:min-w-[80px] [&_label]:text-left [&_input]:w-full [&_input]:flex-shrink [&_input]:h-[45px] [&_input]:indent-[15px] [&_input]:border [&_input]:border-darkOnly-border [&_input]:bg-zinc-900 [&_input]:rounded-lg [&_textarea]:w-full [&_textarea]:flex-shrink [&_textarea]:h-[300px] [&_textarea]:indent-[15px] [&_textarea]:pt-2 [&_textarea]:border [&_textarea]:border-darkOnly-border [&_textarea]:bg-zinc-900  [&_textarea]:rounded-lg",
        {}
      )}
    >
      {children}
    </div>
  );
};
