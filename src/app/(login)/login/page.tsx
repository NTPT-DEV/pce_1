import { LockKeyhole, UserRound } from "lucide-react"
import Link from "next/link"

const LoginForm = () => {
    return (
        <div className="flex flex-col items-center my-7 gap-2 bg-[#f9f9f9] px-12 py-7 rounded-2xl 
        shadow-sm/10 hover:shadow-md/10 transition-all duration-300">
            <div className="flex justify-center items-center gap-2 w-full">
                <UserRound className="text-gray-600" />
                <input
                    type="text"
                    placeholder="User name"
                    className="bg-[#ffffff] border-gray-300 rounded-md px-3 py-1
                    outline-none border-1  focus:border-red-300 focus:border-1 transition-all duration-200
                    " />
            </div>
            <div className="flex justify-center items-center gap-2 w-full">
                <LockKeyhole className="text-gray-600" />
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-[#ffffff] border-gray-300 rounded-md px-3 py-1
                    outline-none border-1  focus:border-red-300 focus:border-1 transition-all duration-200
                    " />
            </div>
            <button className="bg-[#C00000] w-[50%] py-1 rounded-xl border-white border-2 shadow-md font-[prompt] text-white mt-3 active:scale-95 transition-all duration-200"><Link href='/home'>เข้าสู่ระบบ</Link></button>
        </div>
    )
}
export default LoginForm