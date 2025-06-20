import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Workflow } from "lucide-react"

export const metadata: Metadata = {
  title: "Workflows - PyAutomate AI",
  description: "Create and manage automation workflows",
}

export default function WorkflowsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Workflows</h1>
        <p className="text-muted-foreground">Create and manage your automation workflows</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workflow Dashboard</CardTitle>
          <CardDescription>Create and manage your workflow automations</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-center">
            <Workflow className="h-10 w-10 text-muted-foreground" />
            <h3 className="text-lg font-medium">No workflows yet</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Create your first workflow to automate business processes, approval chains, and complex multi-step
              operations.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
