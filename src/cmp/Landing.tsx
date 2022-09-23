import A from '../assets/video/pexels-ivan-samkov-6955102.mp4'
import Samuria from '../assets/Samuria.jpg'
import China from '../assets/China.jpg'
import {RiMenu4Fill} from 'react-icons/ri'
import {FiX} from 'react-icons/fi'
import { useState,useEffect } from 'react'
import { motion } from "framer-motion"
import Grid from "./Grid";
const Landing=()=>{
    const [fix,setfix]= useState(false)
    const [screen,setscreen]= useState(false)
    const [screenfix,setscreenfix]= useState(false)

    useEffect(()=>{
      console.log("screenfix:",screenfix)
      setTimeout(() => {
       
        if(screenfix)  setfix(false),
        setscreenfix(false)
      }, 500);
    },[screenfix])
    useEffect(()=>{
      console.log('screeen:',screen)
      setTimeout(() => {
if(screen) setfix(true),
        setscreen(false)
      }, 700);
    },[screen])
    
return(
<>
{ fix===false && <div  style={{backgroundImage:`url(${China})`}}
 className={`fixed bg-cover bg-top text-[#f7f7f7] ${screen && 'text-white'} right-0 bottom-0 min-w-[100vw] 
     min-h-[100vh]  font-["garamond_premier_pro",serif]`} >
      
    <motion.div className=  {`${screen && 'bg-white'} absolute rounded-full box-border 
    p-2   duration-500 top-[50%] left-[1%] z-30 lg:top-[2%]`}
    animate={{scale:screen?50:1}}
    transition={{delay:.1,}}
    >
    <RiMenu4Fill className=' text-[3vw] cursor-pointer  lg:text-[4vw] ' ></RiMenu4Fill>
    </motion.div>

    <div className="hover:bg-white absolute rounded-full box-border p-2 z-40 lg:top-[2%]
    duration-500 hover:text-black top-[50%] left-[1%] ">
    <RiMenu4Fill className={`${screen && 'text-white'}   text-[3vw] cursor-pointer 
     lg:text-[4vw]  `} 
      onClick={()=>{setscreen(true) }}></RiMenu4Fill>
    </div>
     <nav className='h-[60px] flex justify-end items-center p-2 px-10 w-full z-20 ' >
    <h1  className=' text-3xl  font-semibold  ' > 关于</h1>
     </nav>
     <div className="absolute top-[50%] right-[50%] translate-x-[50%] w-[70vw] z-20
     translate-y-[-50%] grid  ">
        <h2 className='text-[2.5vw] tracking-[.3vw] justify-self-start' >Archaeologist</h2>
        <h1 className='text-[6vw] leading-[6.7vw] tracking-[2.5vw] uppercase w-full' >Tao Longwei</h1>
        <h2  className='text-[1vw] justify-self-end translate-x-[-190%] tracking-[.4vw] ' 
        >来自屋久岛 </h2>
     </div>
</div> }

{ fix===true && 
<>
<Grid></Grid>
<motion.div   className= {`${screenfix && ` bg-black`} 
 z-50 rounded-full fixed text-[3vw] left-[1%] top-[50%] box-border p-2 
 cursor-pointer  lg:text-[4vw] lg:top-[2%] ` }
   animate={{scale:screenfix?50:1}}
    transition={{delay:.1,duration:1}}
    >
         <FiX></FiX>
</motion.div> 

<div className={`z-[60] rounded-full fixed text-[3vw] left-[1%] top-[50%] text-black 
 box-border p-2 cursor-pointer lg:text-[4vw] ${!screenfix && 'hover:text-white hover:bg-black ' } 
  duration-300 lg:top-[2%]` }  onClick={()=>{setscreenfix(true) }}  >
      <FiX></FiX>
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