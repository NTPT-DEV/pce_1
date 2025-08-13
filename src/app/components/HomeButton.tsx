import { House } from "lucide-react"
import Link from "next/link"

const HomeButton = () => {
    return (
         <Link href='/home' className="flex justify-center w-full">
            <div
            className="w-[80%] h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700">
           <House className="text-white" width={25} height={25} /><h1 className="text-white text-2xl font-[prompt]">หน้าหลัก</h1>
        </div>
        </Link>
    )
}
export default HomeButton