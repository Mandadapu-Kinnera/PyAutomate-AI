"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Clock, Database, FileText, BotIcon as Robot, Workflow } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 0 },
  { name: "Mar", value: 0 },
  { name: "Apr", value: 0 },
  { name: "May", value: 0 },
  { name: "Jun", value: 0 },
  { name: "Jul", value: 0 },
]

export function DashboardOverview() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Automations</CardTitle>
              <Robot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Start creating automations</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Workflows</CardTitle>
              <Workflow className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Create your first workflow</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Processed</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0 GB</div>
              <p className="text-xs text-muted-foreground">Upload data to get started</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0 hrs</div>
              <p className="text-xs text-muted-foreground">Automate tasks to save time</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Automation Activity</CardTitle>
              <CardDescription>Automation runs over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ChartContainer
                config={{
                  value: {
                    label: "Automation Runs",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="var(--color-value)"
                      strokeWidth={2}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your system activities will appear here</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center h-[240px] text-center">
                <FileText className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">No activities yet</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Your recent activities will appear here once you start using the system.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Analytics Dashboard</CardTitle>
            <CardDescription>Detailed analytics for your automation processes</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-center">
              <BarChart3 className="h-10 w-10 text-muted-foreground" />
              <h3 className="text-lg font-medium">Analytics Module</h3>
              <p className="text-sm text-muted-foreground">
                Detailed analytics will be displayed here once you start using the system.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Reports Dashboard</CardTitle>
            <CardDescription>Generate and view reports for your automation processes</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-center">
              <FileText className="h-10 w-10 text-muted-foreground" />
              <h3 className="text-lg font-medium">Reports Module</h3>
              <p className="text-sm text-muted-foreground">
                Detailed reports will be displayed here once you start generating data.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
