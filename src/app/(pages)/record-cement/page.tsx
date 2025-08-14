import Header from "@/app/components/Header"
import HomeButton from "@/app/components/HomeButton"

const RecordCementPage = () => {
    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-between">
            <Header />
            <div className="flex-1 w-full flex flex-col items-center mt-2 ">
                <div
                    className="w-[80%] h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700
          border-4 border-white drop-shadow-md">
                    <h1 className="text-white text-2xl font-[prompt]">บันทึกผลทดสอบก้อนปูน</h1>
                </div>

                {/* FORM */}

                <form className="flex flex-col w-[70%] justify-center  font-[prompt] gap-2">
                    <div className="flex justify-between items-center w-full">
                        <label className="text-left "> ชื่อโปรเจ็ค</label>
                        <input type="text" className="w-[50%] bg-gray-100 text-sm py-2 px-3 rounded-md" placeholder="ระบุชื่อโปรเจค" />
                    </div>
                    <div className="flex justify-between items-center w-full ">
                        <label >ชนิดก้อนปูน</label>
                        <select className="w-[40%] bg-gray-100 text-sm py-2 px-3 rounded-md">
                            <option value="Cube">Cube</option>
                            <option value="Cylinder">Cylinder</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <label className="text-left ">ปริมาณซีเมนต์ (กก.)</label>
                        <input type="number" className="w-[40%] bg-gray-100 text-sm py-2 px-3 rounded-md" placeholder="ระบุจำนวน" />
                    </div>
                    <div className="flex justify-between items-center w-full ">
                        <label >ขนาดหิน</label>
                        <select className="w-[40%] bg-gray-100 text-sm py-2 px-3 rounded-md">
                            <option value='3/4"'>3/4&quot;</option>
                            <option value='3/8"'>3/8&quot;</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <label className="text-left ">ปริมาณหิน (กก.)</label>
                        <input type="number" className="w-[40%] bg-gray-100 text-sm py-2 px-3 rounded-md" placeholder="ระบุจำนวน" />
                    </div>
                    <div className="flex justify-between items-center w-full ">
                        <label >ชนิดทราย</label>
                        <select className="w-[40%] bg-gray-100 text-sm py-2 px-3 rounded-md">
                            <option value='ทราย (ทั่วไป)'>ทราย (ทั่วไป)</option>
                            <option value='หินฝุ่น (แทนทราย)'>หินฝุ่น (แทนทราย)</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <label className="text-left ">ปริมาณทราย (กก.)</label>
                        <input type="number" className="w-[40%] bg-gray-100 text-sm py-2 px-3 rounded-md" placeholder="ระบุจำนวน" />
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <label className="text-left ">ปริมาณน้ำ (ลิตร)</label>
                        <input type="number" className="w-[40%] bg-gray-100 text-sm py-2 px-3 rounded-md" placeholder="ระบุจำนวน" />
                    </div>
                    <div className="flex justify-between items-center w-full ">
                        <label >ชนิดน้ำยา</label>
                        <select className="w-[40%] bg-gray-100 text-sm py-2 px-3 rounded-md">
                            <option value='PCE 500'>PCE 500</option>
                            <option value='PCE 600'>PCE 600</option>
                            <option value='PCE 1333'>PCE 1333</option>
                            <option value='PCE 1750'>PCE 1750</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <label className="text-left ">ปริมาณน้ำยา (ลิตร)</label>
                        <input type="number" className="w-[40%] bg-gray-100 text-sm py-2 px-3 rounded-md" placeholder="ระบุจำนวน" />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label className="text-start ">บันทึกเพิ่มเติม</label>
                        <textarea className="w-full h-32 bg-gray-100 text-sm py-2 px-3 rounded-md resize-none" placeholder="บันทึกเพิ่มเติม" />
                    </div>
                    <button type="submit" className="bg-red-700 text-white text-lg py-3 rounded-xl active:scale-95 transition-all duration-200 active:bg-red-800">
                        สร้างโปรเจ็ค
                    </button>
                </form>
                <div className="flex flex-col w-full gap-2 justify-center items-center mt-7">
                </div>

            </div>
            <HomeButton />
        </div>
    )
}
export default RecordCementPage