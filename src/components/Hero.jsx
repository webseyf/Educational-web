import React from "react"
import "./Hero.css"
import Navbar from "./Navbar"

export default function (){
  return (
    <>
    <div className="container">
      
        <div className="at top">
        <p className="academ">ACADEMIA</p>
        <p className="online">ONLINE EDUCATION & LEARNING</p>
        </div>
    <div><Navbar/></div>
        <div className="middle">
        <p className="welcome">WELCOME TO ACADEMIA</p>
        <h1 className="best">BEST EDUCATIONAL EXPERTISE</h1>
        <p className="lorem">Lorem ipsum doloatione dicta obcaecati, cum amet iure corporis exercitationem magnam earum ducimus quae corrupti.</p>
        </div>

        <div className="buttons">
        <button className="start btn">Get Started Now</button>
        <button className="view btn">View Course</button>
        </div>
      
    </div>
    </>
  )
}
