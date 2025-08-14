
import Header from "../../components/Header"
import HomeButton from "../../components/HomeButton"
import MenuButton from "../../components/MenuButton";

interface Props {
  title: string;
  linkUrl: string;
}
const checkMaterialsMenu: Props[] = [
  { title: 'ตรวจสอบหิน', linkUrl: '/check-materials/check-rock' },
  { title: 'ตรวจสอบทราย', linkUrl: '/check-materials/check-sand' },
];

const CheckMaterialsPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between">
      <Header />
      <div className="flex-1 w-full flex flex-col items-center mt-2 ">
        <div
          className="w-[80%] h-16 flex justify-center items-center gap-2 py-7 rounded-2xl mb-5 bg-red-700
          border-4 border-white drop-shadow-md">
          <h1 className="text-white text-2xl font-[prompt]">ตรวจสอบวัตถุดิบ</h1>
        </div>
        <h1 className="text-red-700 text-2xl font-[prompt] font-semibold">รายการตรวจสอบ</h1>
        <div className="flex flex-col w-full gap-2 justify-center items-center mt-7">
          {checkMaterialsMenu.map((item, index) => (
            <MenuButton key={item.title} index={index} {...item} />
          ))}
        </div>

      </div>
      <HomeButton />
    </div>
  )
}
export default CheckMaterialsPage