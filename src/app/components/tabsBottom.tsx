const TabsBottom = () => {

  const buttonTab = [
    'วัตถุดิบ',
    'การผลิต',
    'คุณภาพ',
    'อื่นๆ',
  ]

  return (
    <div className="w-screen flex h-auto">
      {buttonTab.map((item, index) => {
        return <button key={index} 
        className="flex-1 bg-[#8e0000] border border-white py-5 text-white font-[prompt] font-semibold
        hover:bg-[#C00000] hover:-translate-y-0.5 transition-all duration-200
        ">
          {item}
        </button>
      })}
    </div>
  )
}
export default TabsBottom