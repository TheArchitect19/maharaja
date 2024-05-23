import React from 'react'

export const Heading = ({heading}) => {
  return (
    <div className=" w-fit uppercase flex flex-col gap-1 p-2 tracking-tight font-extralight text-[15px] md:text-[35px] ">
        {heading}
        <div className="gap-1 md:gap-2 flex flex-col items-end">
            <div className="h-[1px] bg-black w-[75%]"></div>
            <div className="h-[1px] bg-black w-[40%]"></div>
        </div>
    </div>
  )
};

export default Heading;