import Header from "@/app/components/Header"
import HomeButton from "@/app/components/HomeButton"
import MenuButton from "@/app/components/MenuButton"
import Link from "next/link"

const SuccessRecordPage = () => {
    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-between">
            <Header />
            <div className="flex-1 w-full flex flex-col items-center mt-2 ">
                <div
                    className="w-[80%] h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700
          border-4 border-white drop-shadow-md">
                    <h1 className="text-white text-2xl font-[prompt]">บันทึกผลทดสอบก้อนปูน</h1>
                </div>

                <div className="flex flex-col w-[70%] justify-center font-[prompt] gap-2">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-left font-bold text-lg ">ชื่อโปรเจ็ค</h1>
                        <div className="flex justify-center items-center w-[70%] bg-gray-100 text-sm py-2 px-3 rounded-md">แผ่นพื้นสูตร 1</div>
                    </div>

                    <div className="flex flex-col mt-7 gap-5">
                        <h1 className="text-center text-4xl font-semibold">ท่านสามารถบันทึกผลและข้อมูลเพิ่มเติมได้ที่</h1>
                        <h3 className="text-center text-4xl font-semibold">หัวข้อ</h3>
                        <div className="flex justify-center text-red-700 text-2xl font-semibold gap-3">
                            <Link href=''><p>รายงาน &gt;</p></Link>
                            <Link href=''><p>รายงานทดสอบก้อนปูน</p></Link>
                        </div>

                        <MenuButton linkUrl="" title='รายงานทดสอบก้อนปูน' index={0} />
                    </div>

                </div>
                <div className="flex flex-col w-full gap-2 justify-center items-center mt-7">
                </div>

            </div>
            <div className="flex flex-col items-start w-[80%] gap-2">
                <HomeButton />
            </div>
        </div>
    )
}
export default SuccessRecordPage