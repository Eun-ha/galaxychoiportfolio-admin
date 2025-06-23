"use client";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { signUp } from "@/backend/account-actions";
import { Button } from "../button";
import React from "react";
import Link from "next/link";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, dispatch] = React.useActionState(signUp, undefined);

  useEffect(() => {
    if (password !== confirmPassword && confirmPassword !== "") {
      setPasswordError("Passwords do not match.");
    } else {
      setPasswordError("");
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (password !== confirmPassword) {
      e.preventDefault();
      setPasswordError("Passwords do not match.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          회원가입
        </h2>
        <form className="space-y-5" action={dispatch} onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="name">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="email">
              이메일
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1" htmlFor="password">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              className="block text-gray-300 mb-1"
              htmlFor="confirmPassword"
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {passwordError && <div>{passwordError}</div>}
          </div>
          <SignUpButton />
          {errorMessage && (
            <>
              <p>{errorMessage}</p>
            </>
          )}
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <Link href="/login" className="text-gray-400 hover:text-white">
            로그인
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white">
            메인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

function SignUpButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
      aria-disabled={pending}
    >
      회원가입
    </Button>
  );
}
