"use client";

import Link from "next/link";

import { Logo } from "./Icons";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-full m-auto p-6">
        <div className="flex flex-row items-center gap-4">
          <Link href="https://app.heygen.com/" target="_blank">
            <Logo />
          </Link>
          <div className="bg-gradient-to-br from-sky-300 to-indigo-500 bg-clip-text">
            <p className="text-lg font-semibold text-primary">
              Lexware - KI Agent
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
