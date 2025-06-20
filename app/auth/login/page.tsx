import type { Metadata } from "next"
import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export const metadata: Metadata = {
  title: "Login - PyAutomate AI",
  description: "Login to your PyAutomate AI account",
}

export default function LoginPage() {
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
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <LoginForm />
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="font-medium underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
