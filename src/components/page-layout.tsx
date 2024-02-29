import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  className?: string
}

const PageLayout = ({ children, className }: Props) => (
  <main className={cn("flex-1", className)}>{children}</main>
)

export default PageLayout
