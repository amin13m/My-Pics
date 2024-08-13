import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"


export default function useFirestore(collectionName) {

    const [docs, setDocs]= useState(null)

    useEffect(()=>{
        const q = query(collection(db,collectionName) , orderBy('date','desc'))
        const unsub = onSnapshot(q , (snapshot)=>{
            let Docs = []

            snapshot.forEach((doc)=>{
                Docs.push({...doc.data() ,id: doc.id})
            });

            setDocs(Docs)
        })
        
        return()=>unsub()

    },[collectionName])

    return {docs}

}
