import { motion } from "framer-motion"
function Animation() {
 
  return (
    <div className="grid  w-full">
      <div  className="h-[700px] w-full bg-slate-500 " >
   </div>
  <div  className="h-[600px] grid relative justify-center items-center overflow-hidden w-full " >
 <motion.div  className=" bg-black h-[6px] w-[6px] rounded-full grid relative justify-center items-center " 
initial={{scale:0.001}}
whileInView={{scale:1.1}}
transition={{duration:2,delay:1, type: "spring", stiffness: 60}}
 viewport={{ once: true }}
 >
</motion.div>

<motion.div  className="rounded-full h-[100px] w-[100px] absolute left-[50%] top-[50%]  bg-white  " 
initial={{scale:0.001}}
whileInView={{scale:1.1}}
transition={{duration:2,delay:1, type: "spring", stiffness: 60}}
 viewport={{ once: true }}
>

</motion.div>

<motion.div  className="rounded-full h-[100px] w-[100px] absolute left-[5%] top-[50%]  bg-white  " 
initial={{scale:0.001}}
whileInView={{scale:1.1}}
transition={{duration:2,delay:1, type: "spring", stiffness: 60}}
 viewport={{ once: true }}
>

</motion.div>

<motion.div  className="rounded-full h-[100px] w-[100px] right-[5%]   absolute top-[50%]  bg-white  " 
initial={{scale:0.001}}
whileInView={{scale:1.1}}
transition={{duration:2,delay:1, type: "spring", stiffness: 60}}
 viewport={{ once: true }}
>

</motion.div>
  </div>
  <div  className="h-[700px] w-full bg-slate-500 " >
   </div>
    </div>

   
  );
}
export default Animation;