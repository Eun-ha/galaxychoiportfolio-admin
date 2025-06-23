import { signOut } from "@/auth";
import { Button } from "../button";

export default function LogoutForm() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button className=" text-sm font-medium text-white bg-blue-500 rounded-lg">
          로그아웃
        </Button>
      </form>
    </>
  );
}

export function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="flex items-center justify-center gap-2 h-[48px] w-full grow rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <span className="hidden md:block">로그아웃</span>
      </button>
    </form>
  );
}
