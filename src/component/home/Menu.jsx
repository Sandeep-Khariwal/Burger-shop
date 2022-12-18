import React from 'react';
import MenuCard from './MenuCard';
import Cheese from "../../assets/cheeseBurger.jpg"
import Cheese1 from "../../assets/cheeseBurger1.jpg"
import Cheese2 from "../../assets/cheeseBurger2.jpg"
import "../../styles/footer.scss"

const Menu = () => {

  const addToCartHandler = (itemNum) =>{
   
  }

  return (
    <section id='menu'>
      <h1>Menu</h1>

      <div className='cards'>
        <MenuCard className="MenuCard" itemNum={1}
                  burgerSrc={Cheese}
                  price={200}
                  tittle="Cheese Burger"
                  handler={addToCartHandler}
                  delay={0.1}
                  /><br/><br/>

<MenuCard className="MenuCard" itemNum={2}
                  burgerSrc={Cheese1}
                  price={450}
                  tittle=" National Cheese Burger"
                  handler={addToCartHandler}
                  delay={0.5}
                  /><br/><br/>

<MenuCard className="MenuCard" itemNum={3}
                  burgerSrc={Cheese2}
                  price={750}
                  tittle="Classical Cheese Burger"
                  handler={addToCartHandler}
                  delay={0.9}
                  />
      </div>
      
    </section>
  )
}

export default Menu
