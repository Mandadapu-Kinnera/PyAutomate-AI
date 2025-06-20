import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Integrations - PyAutomate AI",
  description: "Connect PyAutomate AI with other systems and services",
}

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
        <p className="text-muted-foreground">Connect PyAutomate AI with other systems and services</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Integrations Dashboard</CardTitle>
          <CardDescription>Connect with CRM, ERP, and other systems</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-center">
            <Link2 className="h-10 w-10 text-muted-foreground" />
            <h3 className="text-lg font-medium">No integrations yet</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Connect PyAutomate AI with your existing systems like CRM, ERP, and HRMS to automate data synchronization
              and workflows.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
