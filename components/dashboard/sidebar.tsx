"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  BotIcon as Robot,
  Workflow,
  Database,
  BarChart3,
  Link2,
  FileText,
  Settings,
  HelpCircle,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SidebarItem {
  title: string
  href: string
  icon: React.ElementType
  canAddTask: boolean
  addTaskHref?: string
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    canAddTask: false,
  },
  {
    title: "RPA Automation",
    href: "/dashboard/rpa",
    icon: Robot,
    canAddTask: true,
    addTaskHref: "/dashboard/rpa/new",
  },
  {
    title: "Workflows",
    href: "/dashboard/workflows",
    icon: Workflow,
    canAddTask: true,
    addTaskHref: "/dashboard/workflows/new",
  },
  {
    title: "Data Processing",
    href: "/dashboard/data",
    icon: Database,
    canAddTask: true,
    addTaskHref: "/dashboard/data/new",
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
    canAddTask: false,
  },
  {
    title: "Integrations",
    href: "/dashboard/integrations",
    icon: Link2,
    canAddTask: true,
    addTaskHref: "/dashboard/integrations/new",
  },
  {
    title: "Documentation",
    href: "/dashboard/docs",
    icon: FileText,
    canAddTask: false,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    canAddTask: false,
  },
  {
    title: "Help & Support",
    href: "/dashboard/support",
    icon: HelpCircle,
    canAddTask: false,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-background lg:block w-64 shrink-0">
      <div className="h-full py-6 pr-2">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
              {item.canAddTask && item.addTaskHref && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={item.addTaskHref}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Add {item.title}</span>
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add {item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
