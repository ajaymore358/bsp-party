import React from 'react'
import './Header.css'
import { Sidebar } from './Sidebar'
export const Header = () => {
  return (
    <>
     <header>
     <Sidebar />
        <button className='btn'><a href="">Donate</a></button>
        <img src="bsplogo.jpg" alt="logo" /><h1>Bahujan Samaj Party</h1>
        
        <div className='icon'>
           <a href='https://www.facebook.com/bspsocial/'><img src="facebook.jpg" alt="fb" /></a>
           <a href='https://www.instagram.com/bsp4india_/?hl=en'><img src="inta.jpg" alt="int" /></a>
           <a href='https://twitter.com/bspindia?lang=en'><img src="twitter.jpg" alt="twt" /></a>
        </div>
        <button className='btn'><a href="https://www.bsp4ts.com/join">Join Now</a></button>
    </header>

    </>
  )
}
