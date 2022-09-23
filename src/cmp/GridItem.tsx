import { motion } from "framer-motion"
import data from "../data/data"
import { useEffect, useState } from "react"

interface props{
    id:number,
    y:number
}
const Griditem:React.FC<props>=(props)=>{
    function pad(number:number, length:number):string {
        var str = '' + number;
        while (str.length < length) {  str = '0' + str; }
       
        return str; }
 
        function getOffset(el:any) {
          const rect = el.getBoundingClientRect();
          return {
            left: rect.left + window.scrollX,
          };
        }
        const [hover,sethover]=useState(false) 
       
        // let elem = document.querySelector('#origin');
        // const [x,letx]=useState(0) 
       
        // useEffect(()=>{
        //   letx(0)
        //     window.addEventListener("mousemove",(event)=>
        //     {  
        //       console.log( "client:", event.clientX ,"X", getOffset(elem).left , "distance:",x )
        //       letx(-event.clientX+getOffset(elem).left)  ;
              
        //     })
        
         
        // },[hover])
            
       
      
    
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
                     <motion.img src={data[props.id].img}  className='w-[325px] relative h-[183px] z-20 ' 
                     onHoverStart={()=>{sethover(true)}} 
                     onHoverEnd={()=>{sethover(false)}}
                     whileHover={{scale:1.2,}}
         />
                 <div id="origin" className="h-1 w-1 rounded-full top-[50%] translate-x-[50%] translate-y-[-50%] right-[50%] absolute z-30 "></div>
                <motion.div className="tracking-[.4vw] font-[600] absolute left-[0%] bottom-1 "
                   animate={{
                     y:hover?-50:0
                   }}
                  >{data[props.id].title} </motion.div>
     
</motion.div>

)
}

export default Griditem