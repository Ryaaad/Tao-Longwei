import { GrUp } from "react-icons/gr";
import { motion,AnimatePresence } from "framer-motion"
import Griditem from "./GridItem";

const Grid=()=>{
    const zz=[13,14,15,16,17,18]
   const xx=[7,8,9,10,11,12]
   const yy=[0,1,2,3,4,5]
return(

    <div  className="my-2 lg:my-0 font-['garamond_premier_pro',serif] overflow-hidden ">
        
        <div className="h-[200px]"></div>
        <div className=" mt-1 h-[1800px] grid grid-cols-[25vw,25vw,25vw] relative p-5 text-[#000000]
         gap-[50px] justify-center text-xl  ">
            <div className="grid grid-cols-1 grid-rows-[238px,238px,238px] 
             lg:grid-rows-[238px,238px]  gap-[70px]">
           {yy.map(y=>{
            return <Griditem y={-100} key={y} id={y} ></Griditem>
           })}

            </div>

             <div className="grid grid-cols-1 grid-rows-[238px,238px,238px] 
             translate-y-[-70px]  gap-[70px]">
           {xx.map(x=>{
            return <Griditem y={-70} key={x} id={x} ></Griditem>
           })}

            </div>

            <div className="grid grid-cols-1 grid-rows-[238px,238px,238px] 
            translate-y-[30px] gap-[70px]">
           {zz.map(y=>{
            return <Griditem  y={-98} key={y} id={y} ></Griditem>
           })}

            </div>
        </div>

        <div className="h-[500px] relative  " >
        <motion.div className="absolute top-[50%] right-[50%] translate-x-[50%] w-[90vw]
     translate-y-[-50%] grid justify-center "
    
     >
        <h2 className='text-[2.5vw] tracking-[.3vw]' >Archaeologist</h2>
        <h1 className='text-[5vw]  leading-[5.2vw] uppercase tracking-[4vw] justify-center' >Tao Longwei</h1>
        <h2  className='text-[1.8vw]  tracking-[.4vw] ' >来自屋久岛 </h2>
        <div className="mt-5 text-[15px] font-[600] grid gap-2">
        <p >A director and film maker with the Tokyo visual design studio Tangram.</p>
       <p  >Characterized by a worldview that completely transforms casual everyday landscapes, expressed through the skillful use of light.</p>

        </div>
     
     </motion.div>
     <motion.div  className="absolute   right-[50%] cursor-pointer bottom-[0%]" onClick={()=>{
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        
     }}
     initial={{y:0}}
     whileHover={{ scale:1.1,y:1}}
     whileInView={{y:-50, }}
     transition={{ bounce:.5 , duration:0.5,repeat:0 }}
     >
     <GrUp className="text-4xl " ></GrUp>
     </motion.div>
        
        </div>
    </div>
)

}

export default Grid