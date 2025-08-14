'use client'
import Header from "@/app/components/Header"
import HomeButton from "@/app/components/HomeButton"
import PrevBtn from "@/app/components/PrevBtn"

const RecordSubmit = () => {
    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-between">
            <Header />
            <div className="flex-1 w-full flex flex-col items-center mt-2 ">
                <div
                    className="w-[80%] h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700
          border-4 border-white drop-shadow-md">
                    <h1 className="text-white text-2xl font-[prompt]">บันทึกผลทดสอบก้อนปูน</h1>
                </div>

                <form className="flex flex-col w-[70%] justify-center font-[prompt] gap-2">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-left font-bold text-lg ">ชื่อโปรเจ็ค</h1>
                        <div className="flex justify-center items-center w-[70%] bg-gray-100 text-sm py-2 px-3 rounded-md">แผ่นพื้นสูตร 1</div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-left ">ชนิดก้อนปูน</p>
                        <div className="flex justify-center items-center w-[50%] bg-gray-100 text-sm py-2 px-3 rounded-md">Cube</div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-left ">ปริมาณซีเมนต์ (กก.)</p>
                        <div className="flex justify-center items-center w-[50%] bg-gray-100 text-sm py-2 px-3 rounded-md">260</div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-left ">ปริมาณหิน 3/4&quot; (กก.)</p>
                        <div className="flex justify-center items-center w-[50%] bg-gray-100 text-sm py-2 px-3 rounded-md">1050</div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-left ">ปริมาณทราย (ทั่วไป)(กก.)</p>
                        <div className="flex justify-center items-center w-[50%] bg-gray-100 text-sm py-2 px-3 rounded-md">850</div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-left ">ปริมาณน้ำ</p>
                        <div className="flex justify-center items-center w-[50%] bg-gray-100 text-sm py-2 px-3 rounded-md">120</div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-left ">ปริมาณน้ำยา PCE 600 (ลิตร)</p>
                        <div className="flex justify-center items-center w-[50%] bg-gray-100 text-sm py-2 px-3 rounded-md">120</div>
                    </div>
                    <div className="flex flex-col  items-center w-full mt-2 gap-3">
                        <p className="text-left ">บันทึกเพิ่มเติม</p>
                        <div className="flex justify-start w-full h-32 bg-gray-100 text-sm py-3 px-3 rounded-md">---</div>
                        <button type="submit" className="bg-red-700  w-full max-w-[300px] text-white text-lg py-3 rounded-xl active:scale-95 transition-all duration-200 active:bg-red-800">
                            สร้างโปรเจ็ค
                        </button>
                    </div>
                </form>
                <div className="flex flex-col w-full gap-2 justify-center items-center mt-7">
                </div>

            </div>
            <div className="flex flex-col items-start w-[80%] gap-2">
                <div className="w-1/2">
                    <PrevBtn link={'/record-cement'} />
                </div>
                <HomeButton />
            </div>
        </div>
    )
}
export default RecordSubmit