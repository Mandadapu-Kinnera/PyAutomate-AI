import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Analytics - PyAutomate AI",
  description: "Analytics and insights for your automation processes",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">View analytics and insights for your automation processes</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Analytics Dashboard</CardTitle>
          <CardDescription>View detailed analytics for your automation processes</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-center">
            <BarChart3 className="h-10 w-10 text-muted-foreground" />
            <h3 className="text-lg font-medium">No analytics data yet</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Start using automations and workflows to generate analytics data. PyAutomate AI will provide insights to
              help optimize your processes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
