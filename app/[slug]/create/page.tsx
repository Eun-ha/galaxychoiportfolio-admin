import CreateForm from "@/components/admin/create-form";

type tParams = Promise<{ slug: string }>;

export default async function Page(props: { params: tParams }) {
  const { slug } = await props.params;

  return <CreateForm slug={slug} />;
}
