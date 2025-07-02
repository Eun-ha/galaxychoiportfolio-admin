import { AsideButtons } from "@/components/aside-buttons";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 py-4 lg:px-[100px] lg:py-[80px]">
      <div className="lg:flex lg:items-start overflow-hidden">
        <AsideButtons path="/admin" />
        {children}
      </div>
    </div>
  );
}
