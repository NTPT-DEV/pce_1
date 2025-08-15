'use client'
import GradeTable from "@/app/components-ui/GradeTable"
import Header from "@/app/components/Header"
import HomeButton from "@/app/components/HomeButton"
import NextBtn from "@/app/components/NextBtn"
import PrevBtn from "@/app/components/PrevBtn"
import { useState } from "react"


const ReportFromSource = () => {
  const [value1, setValue1] = useState<string>('โรงโม่หิน1');
  const [value2, setValue2] = useState<string>('3/4"');


  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between">
      <Header />
      <div className="flex-1 w-full flex flex-col items-center mt-2 ">
        <div
          className="w-[80%] h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700
                    border-4 border-white drop-shadow-md">
          <h1 className="text-white text-2xl font-[prompt]">รานงานตามต้นแหล่ง</h1>
        </div>

        <div className="flex flex-col gap-3 w-[60%] max-w-[400px] justify-between items-center">
          <div className="flex justify-between items-center w-full font-[prompt] gap-5">
            <label className="text-lg text-red-700 font-semibold text-nowrap" >ชนิดน้ำยา</label>
            <select onChange={(e) => setValue1(e.target.value)} className="w-40 bg-gray-100 text-sm py-2 px-3 rounded-md">
              <option value='โรงโม่หิน 1'>โรงโม่หิน 1</option>
              <option value='โรงโม่หิน 2'>โรงโม่หิน 2</option>
              <option value='โรงโม่หิน 3'>โรงโม่หิน 3</option>
              <option value='โรงโม่หิน 4'>โรงโม่หิน 4</option>
            </select>
          </div>
          <div className="flex justify-between items-center w-full font-[prompt] gap-5">
            <label className="text-lg text-red-700 font-semibold" >ขนาดหิน</label>
            <select onChange={(e) => setValue2(e.target.value)} className="w-40 bg-gray-100 text-sm py-2 px-3 rounded-md">
              <option value='3/4"'>3/4&quot;</option>
              <option value='3/8"'>3/8&quot;</option>
            </select>
          </div>
        </div>
        <div className="flex mt-5 gap-3 text-2xl font-semibold font-[prompt] text-red-700">
          <p>{value1}</p>
          <p>{`>`}</p>
          <p>{value2}</p>
        </div>
        <div className="flex mt-6 w-full justify-center items-center ">
          
          {/* Table */}
          <GradeTable />
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
export default ReportFromSource