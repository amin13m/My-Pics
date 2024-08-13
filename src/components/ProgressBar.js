import { useEffect } from "react"
import useStorage from "../hooks/useStorage"
import {motion} from 'framer-motion'


export default function ProgressBar({file, setFile}) {

    const {progress,url} = useStorage(file)
    console.log(progress , url)

    useEffect(()=>{
        if(url){
            setFile(null)
        }
    }, [url])
    
    return (
        <motion.div className="progressBar" 
          initial={{width:0}}
          animate={{width: progress + "%"}}>
        </motion.div>
    )
}
