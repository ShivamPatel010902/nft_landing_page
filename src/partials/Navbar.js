import React from 'react'
import './styles/navbar.css'
import { useState } from "react";
import { BsFilterSquare } from "react-icons/bs";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <div className="flicker-text-container">
            <div className="flicker-text" >
              <h1 class="neon" data-text="U">
                <span class="flicker-1">G</span>
                <span class="flicker-2">E</span>
                <span>A</span>
                <span class="flicker-4">R</span>
              </h1>
            </div>
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className={
              isNavExpanded ? "nav__list expanded" : "nav__list"
            }>
              <li>
                <a href="#home" className="nav__link">
                  Home
                </a>
              </li>
              <li >
                <a href="#about" className="nav__link">
                  About us
                </a>
              </li>
              <li>
                <a href="#services" className="nav__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="nav__link">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__toggle" onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }} id="nav-toggle">
            <BsFilterSquare size={"25px"}/>
          </div>
          <a href="#" className="button button__header">
            Order Now!
          </a>
        </nav>
      </header>

    </>
  )
}
