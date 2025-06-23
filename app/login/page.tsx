import LoginForm from "@/components/account/login-form";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "로그인",
};

export default function Page() {
  return (
    <>
      <Suspense>
        <LoginForm />
      </Suspense>
    </>
  );
}
