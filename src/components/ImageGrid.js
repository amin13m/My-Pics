import { deleteDoc, doc } from "firebase/firestore"
import useFirestore from "../hooks/useFirestore"
import { db, storage } from "../firebase/config"
import { deleteObject, ref } from "firebase/storage"
import { useState } from "react"
import {motion } from'framer-motion'


export default function ImageGrid({setSelectedImg}) {

    const {docs}= useFirestore("images")

    const [showDLT,setShowDLT]=useState(null)

    const handlerClick=(url)=>{
        setSelectedImg(url)
    }

    const handlerDelete=async(e,id,url)=>{
        try {
            await deleteDoc(doc(db,"images", id))

            const imgRef =ref(storage ,url)

            await deleteObject(imgRef)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="imgs-grid">
            {docs && docs.map(doc=>{return(

                <motion.div className="img" 
                  onMouseEnter={()=>setShowDLT(true)}
                  onMouseLeave={()=>setShowDLT(false)}
                  layout
                  key={doc.id}
                  whileHover={{opacity:1}}
                >
                    
                    <motion.img 
                    src={doc.url} 
                    onClick={()=>handlerClick(doc.url)}
                    initial={{opacity:0}}
                    animate={{opacity:0.9}}
                    transition={{delay:1}}
                    />

                    {doc.date && <p>{ doc.date.toDate().toJSON().toString()}</p>}
                    
                    {showDLT && <span onClick={e=>handlerDelete(e ,doc.id,doc.url)}>DELETE</span>}
                
                </motion.div>
                
            )
            })}
        </div>
    )
}
