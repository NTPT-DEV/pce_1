import Image from "next/image"
import LoginForm from "../(login)/login/page"

const LoginPage = () => {
    return (
        <div className="flex flex-col  items-center w-screen h-screen bg-white">
            <div className="flex items-center justify-center w-full h-30 text-center bg-[#C00000] mb-7">
                <Image
                    className="rounded-xl "
                    width={200}
                    height={200}
                    alt='logo pce-1' src='/logo/PCE1-1-1024x348.jpg' />
            </div>
            <div className="flex flex-col justify-around items-center gap-5 mt-7">
                <h1 className="text-red-700 text-3xl justify-center items-center font-bold font-[prompt]">
                    ระบบบริการลูกค้า
                </h1>
                <LoginForm />
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-red-700 text-2xl justify-center items-center font-bold font-[prompt]">เข้าระบบไม่ได้</h1>
                    <h2 className="text-red-700 text-2xl justify-center items-center font-bold font-[prompt]">กรุณาติดต่อ</h2>
                    <h2 className="text-red-700 text-2xl justify-center items-center font-bold font-[prompt]">Line ID : @PCE1</h2>
                </div>
            </div>

        </div>
    )
}
export default LoginPage