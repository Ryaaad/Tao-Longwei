import A from '../assets/video/pexels-ivan-samkov-6955102.mp4'
import Samuria from '../assets/Samuria.jpg'
import China from '../assets/China.jpg'
import {RiMenu4Fill} from 'react-icons/ri'
import {AiOutlineMinus} from 'react-icons/ai'
import { useState } from 'react'
import { motion } from "framer-motion"
import Grid from "./Grid";
const Landing=()=>{
    const [fix,setfix]= useState(false)
return(
<>
{ fix===false && <div  style={{backgroundImage:`url(${China})`}} className={`fixed bg-cover bg-top
     text-[#f7f7f7] right-0 bottom-0 min-w-[100vw]
     min-h-[100vh]  font-["garamond_premier_pro",serif]  `} >
     <nav className='h-[60px] flex justify-between items-center p-2 px-10 w-full ' >
    <h1  className=' text-3xl  font-semibold  ' > 关于</h1>
  <RiMenu4Fill className='absolute text-[3vw] cursor-pointer left-[3%]
  top-[50%]  lg:text-[4vw] ' onClick={()=>{setfix((prev)=>!prev) }} ></RiMenu4Fill>

     </nav>
     <div className="absolute top-[50%] right-[50%] translate-x-[50%] w-[70vw]
     translate-y-[-50%] grid  ">
        <h2 className='text-[2.5vw] tracking-[.3vw] justify-self-start' >Archaeologist</h2>
        <h1 className='text-[6vw] leading-[6.7vw] tracking-[2.5vw] w-full' >Tao Longwei</h1>
        <h2  className='text-[1vw] justify-self-end translate-x-[-190%] tracking-[.4vw] ' >来自屋久岛 </h2>
     </div>
</div> }

{ fix===true && 
<>
<Grid></Grid>
<div className='fixed text-[3vw] left-[2%] top-[50%] cursor-pointer
    lg:text-[4vw] ' onClick={()=>{setfix((prev)=>!prev) }}  >
        <AiOutlineMinus  className='rotate-45 absolute top-0 left-0 ' ></AiOutlineMinus>
        <AiOutlineMinus   className='rotate-[-45deg] absolute top-0 left-0 ' ></AiOutlineMinus>
        </div> 
</>
 }
</>
   
    
)
}

export default Landing



{/* <video  muted autoPlay loop  className="fixed right-0 bottom-0 min-w-[100vw] 
min-h-[100vh]" >
  <source src={A} type="video/mp4"/>
</video> */}