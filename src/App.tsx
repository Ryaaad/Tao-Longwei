import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import Logo from './assets/Chinise Logo.jpg'
import Landing from "./cmp/Landing";
import China from './assets/China.jpg'
function App() {
 const [Load,setLoad]=useState(true)
 const [trans,settrans]=useState(false)
 const [screen,setscreen]=useState(false)


  useEffect(()=>{setTimeout(()=>{setLoad(false)
    setTimeout(()=>{
      settrans(true)
      setTimeout(()=>{
        setscreen(true)
      },200)
    },400)
  }, 5200);},[])
  return (
    <>
   { !screen && <div className="flex justify-center relative h-[100vh] overflow-hidden w-full bg-[#f9f9f9] ">
            <div className=" h-[20vw] absolute top-[calc(50%-21vw)] grid gap-1 justify-center w-full 
            justify-items-center " >
            <img src={Logo}  className='h-[20vw] ' />
            <div className={`h-[2px] w-[30vw] bg-[#f9f9f9] box-border relative overflow-hidden
             ${Load ===false && " overflow-visible h-[3px]"} 
            ${trans===true && "scale-y-[350] duration-1000  "}  `}  > 
            <motion.div className={`bg-black w-[60%] rounded-sm h-full 
            absolute top-0 left-[-90%] ${Load ===false && "hidden"} `} 
             animate={{
              x:["0%","150%","300%",],
          }}
          transition={{
              duration:1,
              repeat:5,
              ease:"linear"
          }} >
  
            </motion.div>
            <div style={{backgroundImage:`url(${China})`}} className={`translate-x-[-50%] bg-black  w-[1%] rounded-sm
             h-full absolute top-0 left-[50%]
             ${Load ===false && ` transition-[transform] scale-x-[3500] h-[3px] duration-1000`} `}
            >  </div>
             </div>
            </div>
           
            {/* </motion.div> */}
            {/*     animation: loading_bar 2s linear 0s infinite */}
     
    </div>}
    { screen && <Landing></Landing>}
    </>
   
  );
}
export default App;