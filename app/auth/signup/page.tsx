import type { Metadata } from "next"
import Link from "next/link"
import { SignUpForm } from "@/components/auth/signup-form"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export const metadata: Metadata = {
  title: "Sign Up - PyAutomate AI",
  description: "Create a PyAutomate AI account",
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border h-14 flex items-center px-4 lg:px-6">
        <div className="flex items-center gap-2 font-semibold">
          <Logo />
          <span>PyAutomate AI</span>
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-muted-foreground">Create an account to get started</p>
          </div>
          <SignUpForm />
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium underline underline-offset-4">
              Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
