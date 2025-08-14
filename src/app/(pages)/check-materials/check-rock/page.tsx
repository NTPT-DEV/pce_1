'use client'

import Header from "@/app/components/Header"
import HomeButton from "@/app/components/HomeButton";
import NextBtn from "@/app/components/NextBtn";
import PrevBtn from "@/app/components/PrevBtn";
import SelectOption from "@/app/components/SelectOption";
import { useState } from "react";

const optionMenuRock1 = [
    { value: 'รับเข้า', option: 'รับเข้า' },
    { value: 'ก่อนผลิต', option: 'ก่อนผลิต' },
]
const optionMenuRock2 = [
    { value: '3/4"', option: '3/4"' },
    { value: '3/8"', option: '3/8"' },
]


const CheckRockPage = () => {

    const [valueRock1, setValueRock1] = useState(optionMenuRock1[0].value);
    const [valueRock2, setValueRock2] = useState(optionMenuRock2[0].value);

    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-between">
            <Header />
            <div className="flex-1 w-full flex flex-col items-center mt-2 ">
                <div
                    className="w-[80%] h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700
          border-4 border-white drop-shadow-md">
                    <h1 className="text-white text-2xl font-[prompt]">ตรวจสอบหิน</h1>
                </div>
                <h1 className="text-red-700 text-2xl font-[prompt] font-semibold">รายการตรวจสอบ</h1>
                <div className="flex flex-col w-full gap-2 justify-center items-center mt-7">
                    <div className="flex flex-col justify-center items-center w-full gap-3">
                        <SelectOption
                            value={valueRock1}
                            options={optionMenuRock1}
                            onChange={setValueRock1}
                        />
                        <SelectOption
                            value={valueRock2}
                            options={optionMenuRock2}
                            onChange={setValueRock2}
                        />
                    </div>
                </div>

            </div>
            <div className="flex flex-col w-full justify-center items-center">
                <div className="flex w-[80%] gap-3">
                    <PrevBtn link={'/check-materials'} />
                    <NextBtn link={'/check-materials/check-rock/check-rock-import'} />
                </div>
                <HomeButton />
            </div>
        </div>
    )
}
export default CheckRockPage