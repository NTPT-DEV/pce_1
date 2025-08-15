const GradeTable = () => {

    const grade = "A"

    return (
        <div className="font-[prompt] w-[80%] ">
            <table className="border min-w-full ">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-center w-32">เดือน/ปี</th>
                        <th className="border px-4 py-2">วันที่ - คุณภาพ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2 text-center font-semibold">ก.ค./68</td>
                        <td className="border px-4 py-2">
                            <div className="flex gap-2 ">
                                <div className="flex flex-col items-center border border-gray-200 rounded-xl px-3 py-1 font-semibold">
                                    <p>{`09`}</p>
                                    <p >{`เกรด`}
                                        <span className={`
                                        ${grade === 'A' ? 'text-green-500' :
                                                grade === 'B' ? 'text-amber-400' :
                                                    grade === 'C' ? 'text-amber-950' : 'text-black'}                                
                                        `}> {grade}</span></p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2 text-center font-semibold">มิ.ย./68</td>
                        <td className="border px-4 py-2">
                            <div className="flex gap-2 ">
                                <div className="flex flex-col items-center border border-gray-200 rounded-xl px-3 py-1 font-semibold">
                                    <p>{`09`}</p>
                                    <p >{`เกรด`}
                                        <span className={`
                                        ${grade === 'A' ? 'text-green-500' :
                                                grade === 'B' ? 'text-amber-400' :
                                                    grade === 'C' ? 'text-amber-950' : 'text-black'}                                
                                        `}> {grade}</span></p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2 text-center font-semibold">พ.ค./68</td>
                        <td className="border px-4 py-2">
                            <div className="flex gap-2 ">
                                <div className="flex flex-col items-center border border-gray-200 rounded-xl px-3 py-1 font-semibold">
                                    <p>{`09`}</p>
                                    <p >{`เกรด`}
                                        <span className={`
                                        ${grade === 'A' ? 'text-green-500' :
                                                grade === 'B' ? 'text-amber-400' :
                                                    grade === 'C' ? 'text-amber-950' : 'text-black'}                                
                                        `}> {grade}</span></p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2 text-center font-semibold">เม.ย./68</td>
                        <td className="border px-4 py-2">
                            <div className="flex gap-2 ">
                                <div className="flex flex-col items-center border border-gray-200 rounded-xl px-3 py-1 font-semibold">
                                    <p>{`09`}</p>
                                    <p >{`เกรด`}
                                        <span className={`
                                        ${grade === 'A' ? 'text-green-500' :
                                                grade === 'B' ? 'text-amber-400' :
                                                    grade === 'C' ? 'text-amber-950' : 'text-black'}                                
                                        `}> {grade}</span></p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GradeTable
