import React, { useEffect } from 'react'
import './Splash.css'

export const Splash = () => {
 useEffect(()=>{
  const timer = setTimeout(()=>{
    document.getElementById("splash-screen").style.display ="none";
  }, 3000);
  return()=>clearTimeout(timer);
 },[]);
  return (
    <div id='splash-screen'>
     <img src="flash.jpg" alt="sf" />
    </div>
  )
}
