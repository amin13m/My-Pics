import {motion } from 'framer-motion'

export default function Modal({selectedImg ,setSelectedImg}) {

    const clickHandler=()=>{
        setSelectedImg(null)
    }

    return (
        <motion.div className="modal"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1 }}
        >
            <motion.img  
            src={selectedImg}
            initial={{y:"-100vh"}}
            animate={{y:0 }}
            transition={{delay:1 }} />
            <span onClick={clickHandler}>+</span>
        </motion.div>
    )
}
