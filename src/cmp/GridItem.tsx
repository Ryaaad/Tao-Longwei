import { motion } from "framer-motion"
import data from "../data/data"
import { useState } from "react"

interface props{
    id:number,
    y:number
}
const Griditem:React.FC<props>=(props)=>{
    function pad(number:number, length:number):string {
        var str = '' + number;
        while (str.length < length) {  str = '0' + str; }
       
        return str; }
        const [hover,sethover]=useState(false) 
return(
<motion.div className="grid justify-start py-5 relative max-h-[238px] min-w-[238px] "
whileInView={{y:props.y}}
transition={{bounce:.5}} 
>
            
            <motion.div className="tracking-[.1vw] absolute left-[0%] top-[-5%]" 
                   animate={{
                     y:hover?50:0
                   }}
                 > {pad(props.id,3)} </motion.div>
                     <motion.img src={data[props.id].img}  className='w-[325px] h-[183px] z-20 ' 
                     onHoverStart={()=>{sethover(true)}} 
                     onHoverEnd={()=>{sethover(false)}}
                     whileHover={{scale:1.1}}
         />
                 
                <motion.div className="tracking-[.4vw] font-[600] absolute left-[0%] bottom-1 "
                   animate={{
                     y:hover?-50:0
                   }}
                  >{data[props.id].title} </motion.div>
     
</motion.div>

)
}

export default Griditem