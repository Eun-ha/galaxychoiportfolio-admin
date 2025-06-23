"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { authenticate } from "@/backend/account-actions";
import React from "react";
import Link from "next/link";
import { Button } from "../button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [errorMessage, dispatch] = React.useActionState(
    authenticate,
    undefined
  );
  const searchParms = useSearchParams();
  const signup = searchParms.get("signup");
  const signupEmail = searchParms.get("email");

  useEffect(() => {
    if (signup === "success" && signupEmail) setEmail(signupEmail);
  }, [signup, signupEmail]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl  text-white mb-6 text-center">
          운영툴을 이용하기 위해 <br />
          로그인을 해주세요.
        </h1>
        <form action={dispatch} className="space-y-5">
          <div>
            {signup === "success" && (
              <div>회원가입이 정상적으로 완료되었습니다.</div>
            )}

            <div>
              <label className="block text-gray-300 mb-1" htmlFor="email">
                이메일
              </label>
              <input
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1" htmlFor="password">
                비밀번호
              </label>
              <input
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                minLength={6}
              />
            </div>
            <div className="flex justify-between items-baseline mt-4 text-sm">
              <div>
                <LoginButton />
                {errorMessage && (
                  <>
                    <p>{errorMessage}</p>
                  </>
                )}
              </div>
              <Link
                href="https://galaxychoiportfolio.vercel.app/"
                className="text-gray-400 hover:text-white"
              >
                메인 페이지로 돌아가기
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
      aria-disabled={pending}
    >
      로그인
    </Button>
  );
}
