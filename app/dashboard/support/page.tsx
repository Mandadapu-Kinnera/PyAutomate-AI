import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, MessageSquare, FileQuestion, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Help & Support - PyAutomate AI",
  description: "Get help and support for PyAutomate AI",
}

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted-foreground">Get help and support for PyAutomate AI</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Browse our comprehensive documentation</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Our documentation covers everything from getting started to advanced features.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>FAQs</CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <FileQuestion className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Browse our frequently asked questions for quick answers to common issues.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Get in touch with our support team</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Our support team is available to help you with any issues or questions.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Forum</CardTitle>
            <CardDescription>Join our community of users</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Connect with other PyAutomate AI users to share tips and get help.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
