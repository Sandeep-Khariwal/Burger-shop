import React from 'react';
import me from "../../assets/founder.jpg";
import {Link} from "react-router-dom";
import {RiFindReplaceLine} from "react-icons/ri"

const About = () => {
  return (
    <section className='about'>
      <main>
        <h1>About US</h1>

        <article>
            <h4>Burger Shop</h4>
            <p>All kind of burger is prepared here</p>
            <button>
                <Link to="/"><RiFindReplaceLine/></Link>
            </button>
        </article>
        <div>
            <h4>Founder</h4>
            <articale>
                <div>
                    <img src={me} alt="not support"></img>
                    <h3>Sandeep</h3>
                </div>
            </articale>
        </div>
      </main>
    </section>
  )
}

export default About
