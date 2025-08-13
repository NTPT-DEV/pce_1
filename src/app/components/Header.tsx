import Image from "next/image"
import Link from "next/link"

const userName = 'John Wick'

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center py-3 px-7">
      <Link href='/'>
        <Image
          className="rounded-xl w-[150px] "
          width={300}
          height={300}
          alt='logo pce-1' src='/logo/PCE1-1-1024x348.jpg' />
      </Link>
      <div className="flex gap-3 justify-center items-center font-[prompt] font-semibold">
        <p>ยินดีต้อนรับ : </p>
        <p>{userName}</p>
      </div>
    </div>
  )
}
export default Header