'use client'
import Header from "@/app/components/Header"
import HomeButton from "@/app/components/HomeButton"
import MenuButton from "@/app/components/MenuButton"
import NextBtn from "@/app/components/NextBtn"
import PrevBtn from "@/app/components/PrevBtn"

interface Props {
  title: string;
  linkUrl: string;
}

const reportMenu: Props[] = [
  { title: 'รายงานตามช่วงเวลา', linkUrl: '/report/report-materials/report-type-rock/report-by-time' },
  { title: 'รายงานตามต้นแหล่ง', linkUrl: '/report/report-materials/report-type-rock/report-from-source' },
  { title: 'รายงานแบบละเอียด', linkUrl: '' },
];

const ReportTypePage = () => {
  return (
     <div className="flex flex-col min-h-screen w-full items-center justify-between">
            <Header />
            <div className="flex-1 w-full flex flex-col items-center mt-2 ">
                <div
                    className="w-[80%] h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700
          border-4 border-white drop-shadow-md">
                    <h1 className="text-white text-2xl font-[prompt]">รายงานผลวิเคราะห์หิน</h1>
                </div>
                <h1 className="text-red-700 text-2xl font-[prompt] font-semibold">ประเภทรายงาน</h1>
                <div className="flex flex-col w-full gap-2 justify-center items-center mt-7">
                     {reportMenu.map((item , index) => {
                    return <MenuButton key={item.title} index={index} {...item} />
                 })}

                </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
               <div className="flex w-[80%] gap-3">
                    <PrevBtn link={'/report/report-materials'} />
                    <NextBtn link={''} />
                </div>
                <HomeButton />
            </div>
        </div>
  )
}
export default ReportTypePage