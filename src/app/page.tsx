import Image from "next/image"

const HomePage = () => {
  return (
    <div className="bg-[#C00000] h-20 flex items-center justify-center text-center">
      <div className="px-4 py-2 bg-white rounded-4xl">
        <Image 
      className="rounded-xl"
      width={120}
      height={120}
      alt='logo pce-1' src='/logo/PCE1-1-1024x348.jpg' />
      </div>
    </div>
  )
}
export default HomePage