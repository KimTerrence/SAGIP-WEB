"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: ChartConfig
}

export function ChartContainer({ config, children, className, ...props }: ChartContainerProps) {
  return (
    <div
      className={cn("w-full overflow-auto", className)}
      role="region"
      {...props}
    >
      {children}
    </div>
  )
}

export interface ChartTooltipProps {
  content: React.ReactElement
  cursor?: boolean
}

export function ChartTooltip({ content, cursor = true }: ChartTooltipProps) {
  return content
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  nameKey = "name",
  valueKey = "value",
  hideLabel = false,
  labelFormatter,
}: {
  active?: boolean
  payload?: any[]
  label?: string
  nameKey?: string
  valueKey?: string
  hideLabel?: boolean
  labelFormatter?: (label: string) => string
}) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-md border bg-background p-2 shadow-sm">
      {!hideLabel && (
        <div className="mb-1 text-sm font-medium">
          {labelFormatter ? labelFormatter(label ?? "") : label}
        </div>
      )}
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{entry.name ?? nameKey}</span>
          <span className="font-medium">{entry.value ?? valueKey}</span>
        </div>
      ))}
    </div>
  )
}

export type ChartConfig = {
  [key: string]: {
    label: string
    color: string
  }
}
