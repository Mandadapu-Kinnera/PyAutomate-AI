import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database } from "lucide-react"

export const metadata: Metadata = {
  title: "Data Processing - PyAutomate AI",
  description: "Process and analyze data with AI",
}

export default function DataProcessingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Data Processing</h1>
        <p className="text-muted-foreground">Process and analyze your data with AI</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Processing Dashboard</CardTitle>
          <CardDescription>Upload and process data from various sources</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-center">
            <Database className="h-10 w-10 text-muted-foreground" />
            <h3 className="text-lg font-medium">No data processed yet</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Upload data to begin processing. PyAutomate AI can handle data from websites, APIs, documents, and more.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
