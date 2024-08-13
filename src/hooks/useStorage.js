import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { db, storage } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function useStorage(file) {
    const [progress,setProgress] = useState(0)
    const [err,setErr] = useState(null)
    const [url,setUrl] = useState(null)

    useEffect(()=>{

        const storageRef =ref(storage, file.name)
        const uploadTask = uploadBytesResumable(storageRef,file)

        const collectionRef =collection(db, 'images')

        const unsub = uploadTask.on('state_changed',(snapshot)=>{
            const precentage = (snapshot.bytesTransferred /snapshot.totalBytes)*100
            setProgress(precentage)
        },(err)=>{
            setErr(err)
        },async()=>{
            const downloadUrl =await getDownloadURL(storageRef)
            setUrl(downloadUrl)

            const date = serverTimestamp()

            await addDoc(collectionRef ,{ url : downloadUrl , date })
        })
        
        return ()=> unsub()

    },[file])

    return {progress ,url,err}
}