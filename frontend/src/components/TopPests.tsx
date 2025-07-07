"use client"

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const pestData = [
  { pest: "Brown Planthopper", count: 186 },
  { pest: "Rice Black Bug", count: 142 },
  { pest: "Green Leafhopper", count: 95 },
  { pest: "Stem Borer", count: 72 },
  { pest: "Rice Hispa", count: 55 },
]

export function TopPest() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Top Detected Pests</CardTitle>
        <CardDescription className="text-xs">
          Based on recent offline detection logs
        </CardDescription>
      </CardHeader>

      <CardContent className="py-1">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart
            layout="vertical"
            data={pestData}
            margin={{ top: 0, right: 16, left: 20, bottom: 0 }}
            barCategoryGap={8}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="pest"
              type="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                value.length > 16 ? value.slice(0, 14) + "…" : value
              }
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#22c55e" radius={[4, 4, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>

      <CardFooter className="pt-1 text-xs text-muted-foreground">
        Showing top 6 pests from your local detection logs.
      </CardFooter>
    </Card>
  )
}

export default TopPest
