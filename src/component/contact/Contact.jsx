import React from 'react';
import {motion} from "framer-motion";
import burger from "../../assets/Burger.png";

const Contact = () => {
  return (
    <section className='contact'>

        <motion.form
        initial={{x:"-100vw" , opacity:0}}
        animate={{x:0 , opacity:1}}
        transition={{delay:0.3}}
        >
            <h2>Contact Us</h2>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>

            <textarea placeholder="Message..." col="30" rows="10"></textarea>
            <button type='submit'>Send</button>

        </motion.form>

        <motion.div className='formBorder'
        initial={{y:"-100vw" , opacity:0}}
        animate={{y:0 , opacity:1}}
        transition={{delay:0.7}}>

            <motion.div>
                <img src={burger} alt='Burger'></img>
            </motion.div>

        </motion.div>
      
    </section>
  )
}

export default Contact
