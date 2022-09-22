import { useState } from "react"
import GridItem from "./GridItem"
import { GrUp } from "react-icons/gr";
import { motion } from "framer-motion"

const Grid=()=>{
    const [Nbr,letNbr]=useState(0)
return(

    <div  className="my-2 lg:my-0 font-['garamond_premier_pro',serif] ">
        <div className=" grid grid-cols-[325px,325px,325px] relative p-12 text-[#000000]
         gap-[60px] justify-center text-xl ">
            <div className="grid grid-cols-1 grid-rows-[238px,238px,238px]  gap-[150px]">
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>

            </div>
            <div className="grid grid-cols-1 grid-rows-[238px,238px,238px] 
            translate-y-[-60px] gap-[150px] ">
  <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            </div>
            <div className="grid grid-cols-1 grid-rows-[238px,238px,238px] 
            translate-y-[40px] gap-[150px] ">
  <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            <GridItem letNbr={letNbr} Nbr={Nbr}></GridItem>
            </div>
        </div>

        <div className="h-[500px] relative  " >
        <div className="absolute top-[50%] right-[50%] translate-x-[50%] w-[90vw]
     translate-y-[-50%] grid justify-start ">
        <h2 className='text-[2.5vw] tracking-[.3vw]' >Archaeologist</h2>
        <h1 className='text-[5vw]  leading-[5.2vw] uppercase tracking-[5.02vw] w-full' >Tao Longwei</h1>
        <h2  className='text-[1.8vw]  tracking-[.4vw] ' >来自屋久岛 </h2>
        <div className="mt-5 text-[15px] font-[600] grid gap-2">
        <p >A director and film maker with the Tokyo visual design studio Tangram.</p>
       <p  >Characterized by a worldview that completely transforms casual everyday landscapes, expressed through the skillful use of light.</p>

        </div>
     
     </div>
     <motion.div  className="absolute   right-[50%]  bottom-[10%]"
     whileHover={{ y:[15,0]}}
     transition={{ type: "spring", stiffness: 30 , duration:0.5 }}
     >
     <GrUp className="text-4xl " ></GrUp>
     </motion.div>
        
        </div>
    </div>
)

}

export default Grid