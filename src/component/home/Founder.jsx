import React from 'react';
import {motion} from "framer-motion";
import me from "../../assets/founder.jpg";

const Founder = () => {

    const options = {
        initial:{
            x:"-100%",
            opacity:"0"
        },

        whileInView:{
            x:"0",
            opacity:"1"
        },
       
    }

  return (
    <section className="founder">
    <motion.div {...options} className="founderDiv" >
    
        <div className="owner">
            <img src={me} alt="founder" />
            {/* height={200} width={200} */}
            <h3>Sandeep Khariwal</h3>
            <br/>
            <p>hey, everyone i'm founder
            <br/>
            of this startup    
            </p> 
        </div>

        {/* <div className="owner">
            <img src={annie} alt="founder"/>
            <h3>Annieee Shri</h3>
            <br/>
            <p>hey, everyone i'm CEO
            <br/>
            of this startup    
            </p> 
        </div> */}
    </motion.div>
    </section>
  )
}

export default Founder
