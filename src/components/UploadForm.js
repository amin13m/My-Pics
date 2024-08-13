import { useState } from "react"
import ProgressBar from "./ProgressBar"
import Axios from "axios";
import { useEffect } from "react";

export default function UploadForm() {

    const [file, setFile]= useState(null)
    const [err, setErr]= useState(null)

    const type =["image/jpeg" , "image/png"]

    const [data, setData] = useState(null)
  
    useEffect( ()=>{ Axios.get('https://catfact.ninja/fact')
      .then(data=> setData(data.data))}
    ,[])



    const handleChange=(e)=>{
        let s = e.target.files[0]
        
        if(s && type.includes(s.type)){
            setFile(s)
            setErr('')
        }else{
            setFile(null)
            setErr("please sellect an img !!!")
        }
    }


   
    return (
        <form className="form">

            <label>
                <input type="file" onChange={handleChange}/>
                <span>+</span> 
            </label>

            {err && <div className="err">{err}</div>}
            {file && <div className="name">{file.name}</div>}

            {file && <div className="ProgressBar">{<ProgressBar
              file={file}
              setFile={setFile}
            />}</div>}

            {file && <div className="err">{data.fact}</div>}
        
        </form>
    )
}
