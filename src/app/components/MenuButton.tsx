'use client'
import { motion } from "motion/react"
import Link from "next/link";

interface Props {
  title: string;
  linkUrl: string;
}
interface MenuButtonProps extends Props {
  index: number;
}

const MenuButton = ({ title, linkUrl, index }: MenuButtonProps) => {
  return (
    <Link href={linkUrl} className="flex w-full justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 * index } }}
        whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0,0,0,0.4)", transition: { duration: 0.2 } }}
        whileTap={{ scale: 1, transition: { duration: 0.3 } }}
        className="w-[70%] h-18 bg-red-700 flex justify-center items-center py-7 rounded-2xl
">
        <h1 className="text-white text-2xl font-[prompt]">{title}</h1>
      </motion.div>
    </Link>
  )
}
export default MenuButton