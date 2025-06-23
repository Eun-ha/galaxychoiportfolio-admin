export function Ping() {
  return (
    <span className="relative inline-flex mr-2 h-[11px] w-[11px]">
      <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-point-red animate-ping"></span>
      <span className="bg-point-red relative inline-flex h-[11px] w-[11px] rounded-full"></span>
    </span>
  );
}
