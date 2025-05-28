import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1 className='navbar-title'>Oliver and Carmen</h1>
        <div className="navbar-date-info">
            <p className="navbar-date">5/10/2026</p>
            <p className="navbar-date-countdown">5 days to go</p>
        </div>
    </nav>
  )
}
