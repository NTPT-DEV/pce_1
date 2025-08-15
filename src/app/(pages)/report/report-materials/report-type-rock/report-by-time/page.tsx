'use client'
import DatePicker from "@/app/components-ui/DatePicker"
import Header from "@/app/components/Header"
import HomeButton from "@/app/components/HomeButton"
import NextBtn from "@/app/components/NextBtn"
import PrevBtn from "@/app/components/PrevBtn"

const ReportByTimePage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between">
            <Header />
            <div className="flex-1 w-full flex flex-col items-center mt-2 ">
                <div
                    className="w-[80%] h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700
          border-4 border-white drop-shadow-md">
                    <h1 className="text-white text-2xl font-[prompt]">รานงานตามช่วงเวลา</h1>

                </div>
                <h1 className="text-red-700 text-2xl font-[prompt] font-semibold">เลือกช่วงเวลา</h1>
                <div className="flex flex-1 w-full justify-center items-center my-5">
                    <DatePicker />
                </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
               <div className="flex w-[80%] gap-3">
                    <PrevBtn link={'/report/report-materials/report-type-rock'} />
                    <NextBtn link={''} />
                </div>
                <HomeButton />
            </div>
        </div>
  )
}
export default ReportByTimePage