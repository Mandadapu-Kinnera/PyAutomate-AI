import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Documentation - PyAutomate AI",
  description: "Documentation and guides for PyAutomate AI",
}

export default function DocumentationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
        <p className="text-muted-foreground">Learn how to use PyAutomate AI effectively</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Documentation Center</CardTitle>
          <CardDescription>Guides, tutorials, and API references</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn the basics of PyAutomate AI and how to set up your first automation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">RPA Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Detailed guide on creating robotic process automation tasks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Learn how to create and manage complex workflows.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Guide on processing and analyzing data with PyAutomate AI.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">API Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Complete API reference for developers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Integration Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">How to connect PyAutomate AI with other systems.</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
