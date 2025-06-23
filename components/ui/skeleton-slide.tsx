import clsx from "clsx";

function Skeleton() {
  return (
    <div className="lg:flex lg:flex-row-reverse">
      <div className="w-full h-[500px] lg:w-[500px] shrink-0 bg-bg-active"></div>
      <div className="w-full mt-4 lg:mr-12 space-y-3">
        <div className="w-10/12 h-8 bg-bg-emphasis rounded-lg" />
        <div className="h-20 lg:h-80 bg-bg-active rounded-lg" />
        <div className="w-9/12 h-6 bg-bg-emphasis rounded-lg" />
        <div className="w-11/12 h-6 bg-bg-active rounded-lg" />
        <div className="w-8/12 h-6 bg-bg-emphasis rounded-lg" />
      </div>
    </div>
  );
}

function SkeletonEffect() {
  return (
    <div className="mb-4">
      <div
        className={clsx(
          "rounded-2xl bg-bg-hover p-4 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent"
        )}
      >
        <Skeleton />
      </div>
    </div>
  );
}

export const SkeletonSlide = () => (
  <div>
    {Array.from({ length: 1 }).map((_, i) => (
      <div key={i}>
        <SkeletonEffect />
      </div>
    ))}
  </div>
);
