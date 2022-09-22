import { useEffect } from "react"
import data from "../data/data"

interface props{
    Nbr:number,
    letNbr: React.Dispatch<React.SetStateAction<number>>
}

const GridItem:React.FC<props>=(props)=>{
  useEffect(()=>{props.letNbr(prev=>prev++)},[]) ; 
function pad(number:number, length:number):string {
   
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
   
    return str;

}

return(
    <div className="grid justify-start max-h-[238px] ">
    <div className="tracking-[.1vw]" >{pad(props.Nbr,3)}</div>
    <img src={data[props.Nbr].img}  className='w-[325px] h-[183px] ' />
    <div className="tracking-[.4vw] font-[600] ">{data[props.Nbr].title}</div>
   </div>
)
}

export default GridItem