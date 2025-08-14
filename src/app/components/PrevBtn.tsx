import { ArrowBigLeft } from "lucide-react"
import Link from "next/link"
import { motion } from 'motion/react'

const PrevBtn = ({link} : {link : string}) => {
    return (
        <Link href={link} className="flex justify-center w-full">
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-12 flex justify-center items-center gap-2 rounded-2xl bg-red-700 border-4 border-white drop-shadow-md">
                <ArrowBigLeft className="text-white" width={25} height={25} /><h1 className="text-white text-xl font-[prompt]">ย้อนกลับ</h1>
            </motion.div>
        </Link>
    )
}
export default PrevBtn