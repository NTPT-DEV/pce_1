'use client'
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import type { DateRange } from "react-day-picker"
import { div } from "motion/react-client"

const DatePicker = () => {

  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(), 
    to: new Date(),  
  })

    const formatDate = (date?: Date) => {
    return date ? date.toLocaleDateString("th-TH", { year: "numeric", month: "2-digit", day: "2-digit" }) : "-"
  }
  return (
   <div className="flex flex-col justify-center items-center gap-3">
    <div className="flex justify-center items-center  gap-5 text-xl font-semibold font-[prompt] text-red-800">
      <p>{formatDate(range?.from)}</p>
      <p>ถึงวันที่</p>
      <p>{formatDate(range?.to)}</p>
    </div>
     <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      defaultMonth={range?.from} 
      className="rounded-lg border shadow-sm"
    />
   </div>
  )
}
export default DatePicker