'use client'
import { House } from "lucide-react"
import Link from "next/link"
import {motion} from 'motion/react'

const HomeButton = () => {
    return (
        <Link href='/home' className="flex justify-center w-full">
            <motion.div
            initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 , delay : 0.2}}
                className="w-full h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700 border-4 border-white drop-shadow-md">
                <House className="text-white" width={25} height={25} /><h1 className="text-white text-2xl font-[prompt]">หน้าหลัก</h1>
            </motion.div>
        </Link>
    )
}
export default HomeButton