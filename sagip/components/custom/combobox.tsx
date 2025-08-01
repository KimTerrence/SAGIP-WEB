"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const crops = [
  {
    value: "palay",
    label: "Palay",
  },
  {
    value: "corn",
    label: "Corn",
  },
  {
    value: "tabaco",
    label: "Tabaco",
  },
  {
    value: "cacao",
    label: "Cacao",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? crops.find((crops) => crops.value === value)?.label
            : "Select Crop"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Crop or Pest." className="h-9" />
          <CommandList>
            <CommandEmpty>No Crop or Pest Found</CommandEmpty>
            <CommandGroup>
              {crops.map((crops) => (
                <CommandItem
                  key={crops.value}
                  value={crops.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {crops.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === crops.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
