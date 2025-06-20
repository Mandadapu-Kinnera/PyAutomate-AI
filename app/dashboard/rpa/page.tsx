import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BotIcon as Robot } from "lucide-react"

export const metadata: Metadata = {
  title: "RPA Automation - PyAutomate AI",
  description: "Robotic Process Automation tools and configurations",
}

export default function RPAPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">RPA Automation</h1>
        <p className="text-muted-foreground">Create and manage robotic process automation tasks</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Automation Dashboard</CardTitle>
          <CardDescription>Create and manage your automation tasks</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-center">
            <Robot className="h-10 w-10 text-muted-foreground" />
            <h3 className="text-lg font-medium">No automations yet</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Create your first automation to streamline repetitive tasks, extract data, process documents, and interact
              with web applications.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
