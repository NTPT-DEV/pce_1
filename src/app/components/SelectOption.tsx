import {motion} from 'motion/react'
 
type OptionType = {
  option: string;
  value: string;
};

interface SelectOptionProps {
  value: string;
  options: OptionType[];
  onChange: (value: string) => void;
}

const SelectOption = ({value , options , onChange } : SelectOptionProps) => {
    return (
       <motion.div
       className=' flex justify-center items-center w-full'
       initial={{opacity : 0 , y : 5}}
       animate={{opacity : 1 , y : 0}}
       transition={{duration : 0.8}}
       >
        <select id="กรุณาเลือก"
        value={value}
        onChange={(e) => onChange(e.target.value)}
            className="flex justify-center items-center text-center appearance-none
                        w-[40%] h-13 bg-red-700 border-4 border-white drop-shadow-md rounded-2xl text-white text-xl font-[prompt] font-semibold">
            
            {options.map((item) => {
                return <option key={item.value} value={item.value} >{item.option}</option>
            })}
        </select>
       </motion.div>
    )
}
export default SelectOption