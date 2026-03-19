"use client";
import {  User } from "firebase/auth";
import { SubmitEvent, useState } from "react";
import { signinAction } from "@/lib/actions";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [status, setStatus] = useState<{ user: User | null; error: string | null } | null>(null);


const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const result = await signinAction(formData); // server action call
  setStatus(result);

  if (result?.user) {
    redirect("/"); // Redirect to home page on successful login
  }
  };
  


  return (
    <main className="min-h-screen bg-linear-to-br from-slate-100 via-white to-cyan-100 p-4 md:p-8">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 rounded-3xl bg-white/90 p-6 shadow-2xl backdrop-blur-sm md:flex-row md:items-center md:justify-between">
        <div className="w-full space-y-4 md:w-1/2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-600">
            Sign in to access the visitor dashboard and manage check-ins in real
            time.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-900">Login</h2>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              />
            </div>
            {status?.error && <p className="text-sm text-red-500">{status.error}</p>}
            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-600 px-4 py-2 text-base font-semibold text-white transition hover:bg-cyan-700"
            >
              Login
            </button>

            <p className="text-center text-sm text-slate-500">
              Forgot password?{" "}
              <a
                href="#"
                className="font-medium text-cyan-600 hover:text-cyan-700"
              >
                Reset
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
