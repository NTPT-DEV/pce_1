'use client'

import Header from "@/app/components/Header"
import HomeButton from "@/app/components/HomeButton"
import NextBtn from "@/app/components/NextBtn"
import PrevBtn from "@/app/components/PrevBtn"
import { Camera, FolderUp } from "lucide-react"

const CheckRockImport = () => {

    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-between">
            <Header />
            <div className="flex-1 w-full flex flex-col items-center mt-2 ">
                <div
                    className="w-[80%] h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700
                                border-4 border-white drop-shadow-md">
                    <h1 className="text-white text-2xl font-[prompt]">ตรวจสอบหิน</h1>
                </div>
                <h1 className="text-red-700 text-2xl font-[prompt] font-semibold">Global State</h1>
                <div className="flex flex-col w-full gap-2 justify-center items-center mt-7">
                </div>
                <div className="flex w-[80%] justify-center items-center gap-5">
                    <div className="flex flex-col w-[50%] h-auto justify-center items-center border-8 border-white shadow-lg bg-red-700 py-20 rounded-3xl 
                    group hover:bg-white hover:border-red-700 transition-all duration-300 cursor-pointer
                    ">
                        <Camera width={100} height={100} className="text-white group-hover:text-red-700" />
                        <p className="font-[prompt] text-lg font-semibold text-white group-hover:text-red-700">ถ่ายรูป</p>
                    </div>                    
                    <div className="flex flex-col w-[50%] h-auto justify-center items-center border-8 border-white shadow-lg bg-red-700 py-20 rounded-3xl 
                    group hover:bg-white hover:border-red-700 transition-all duration-300 cursor-pointer
                    ">
                        <FolderUp width={100} height={100} className="text-white group-hover:text-red-700" />
                        <p className="font-[prompt] text-lg font-semibold text-white group-hover:text-red-700">อัพโหลด</p>
                    </div>                    
                                   
                </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
                <div className="flex w-[80%] gap-3">
                    <PrevBtn link={'/check-materials/check-rock'} />
                    <NextBtn link={''} />
                </div>
                <HomeButton />
            </div>
        </div>
    )
}
export default CheckRockImport