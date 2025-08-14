import Header from "@/app/components/Header";
import MenuButton from "@/app/components/MenuButton";

interface Props {
    title: string;
    linkUrl: string;
}
const menuList: Props[] = [
    { title: 'ตรวจสอบวัตถุดิบ', linkUrl: '/check-materials' },
    { title: 'บันทึกผลทดสอบก้อนปูน', linkUrl: '/record-cement' },
    { title: 'รายงาน', linkUrl: '' },
    { title: 'คำนวนการผลิต', linkUrl: '' },
    { title: 'สั่งซื้อสินค้า', linkUrl: '' },
    { title: 'แจ้งปัญหา', linkUrl: '' },

];

const HomePage = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <Header />
            <div className="flex flex-col gap-2 w-full h-auto items-center mt-4">
                {menuList.map((item, index) => {
                    return <MenuButton key={item.title} {...item} index={index} />

                })}
            </div>
        </div>
    )
}
export default HomePage