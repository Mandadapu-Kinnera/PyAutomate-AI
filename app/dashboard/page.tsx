import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { DashboardOverview } from "@/components/dashboard/overview"

export const metadata: Metadata = {
  title: "Dashboard - PyAutomate AI",
  description: "PyAutomate AI dashboard",
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    return null
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {session.user.user_metadata?.name || "User"}</p>
      </div>
      <DashboardOverview />
    </div>
  )
}
