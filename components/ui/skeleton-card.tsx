import clsx from "clsx";

function Skeleton() {
  return (
    <div className="space-y-3">
      <div className="h-12 bg-bg-active rounded-lg" />
      <div className="w-11/12 h-3 bg-bg-emphasis rounded-lg" />
      <div className="w-8/12 h-3 bg-bg-active rounded-lg" />
      <div className="w-9/12 h-3 bg-bg-active rounded-lg" />
      <div className="w-10/12 h-3 bg-bg-emphasis rounded-lg" />
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

export const SkeletonCard = () => (
  <div>
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i}>
        <SkeletonEffect />
      </div>
    ))}
  </div>
);
