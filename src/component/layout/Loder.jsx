import React from 'react';
import {IoFastFoodOutline} from "react-icons/io5";
import {motion} from "framer-motion";

const Loder = () => {

    const options = {
        initial:{
            opacity:0 
        },
        animate:{
            opacity:1
        },
        transition:{
            ease:"linear",
            repeat:"infinity",
            repeatType:"reverse"
        }
    };

  return (
    <div className="loder">
      <IoFastFoodOutline/>
      <div>
        <motion.p {...options}>Loading...</motion.p>
      </div>
    </div>
  )
}

export default Loder
