import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function changeColor(color) {
   document.body.style.backgroundColor = color;
}

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <Link className="navbar-brand fw-bolder" to='/home' onClick={()=>changeColor('#1abc9c')}>Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link px-lg-3 fw-bolder" to="portfolio" onClick={()=>changeColor('#fff')}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link px-lg-3 fw-bolder" to="about" onClick={()=>changeColor('#1abc9c')}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link px-lg-3 fw-bolder" to="contact" onClick={()=>changeColor('#fff')}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
      </>
}
