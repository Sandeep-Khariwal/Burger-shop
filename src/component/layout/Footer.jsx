import React from 'react';
import {AiFillInstagram , AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>

        <div>
            <h1>Burger Shoap</h1>

            <p>we will try to provide best quality and fast services</p><br/>

            <em>give your feedback</em>

            <strong> All claim recieved by @Sandeep_khariwal</strong>
        </div>

        <aside>

            <h4>Follow US</h4>
            <a href="https://instagram.com/anu_____shri"><AiFillInstagram/></a>
            <a href="https://facebook.com/Sandeep_Khariwal"><AiFillFacebook/></a>

        </aside>

      
    </footer>
  )
}

export default Footer
