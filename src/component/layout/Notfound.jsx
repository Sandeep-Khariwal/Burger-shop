import React from 'react';
import {MdError} from "react-icons/md";
import {Link} from "react-router-dom";

const Notfound = () => {
  return (
    <section className='notFound'>
        <main>
            <div>
                <MdError/>
                <h1>404</h1>
            </div>
            <p>Page not found, click below for home page</p>
            <Link to="/">Home</Link>
        </main>
      
    </section>
  )
}

export default Notfound
