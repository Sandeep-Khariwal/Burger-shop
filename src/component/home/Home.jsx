import React from 'react';
import {motion} from "framer-motion";
import Founder from './Founder';
import "../../styles/founder.scss";
import food from "../../assets/food.jpg";
import Menu from './Menu';
import"../../styles/menu.scss";



const Home = () => {

    const options = {
        initial:{x:"-100%",
        opacity:"0"},
        
        whileInView:{
            x:"0",
            opacity:"1"
        }
    }

  return (
    <>

<img className="image" src={food} alt="food" height={100} width={100}/>

    <div className='home'
    initial={{x:"-100%"}} 
    whileInView={{x:"0%"}}
    >

      <div>
        <motion.h1 {...options}>Fast Food Shop</motion.h1>
        <motion.p {...options}
        transition={
          {delay:0.2}
        }
        >order your fast food</motion.p>
      </div>

      <motion.a href='#menu'
      initial={{y:"-100%" , opacity:"0"} } whileInView={{y:"0" , opacity:"1"}}
      transition={
        {delay:0.3}
      }
      >Check menu</motion.a>
    </div>

    <Menu/>
  <Founder/>
  
    </>
  )
}

export default Home
