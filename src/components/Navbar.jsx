import React from 'react'

export default function Navbar() {
  const WEDDING_DATE = new Date('2026-5-10');
  const currentDate = new Date();
  const daysUntilWedding = daysBetween(WEDDING_DATE, currentDate);

  return (
    <nav className="navbar">
        <h1 className='navbar-title'>The Wedding of Oliver and Carmen</h1>
        <div className="navbar-date-info">
            <p className="navbar-date">May 10, 2026 • Reno, NV</p>
            <p className="navbar-date-countdown">{daysUntilWedding} days to go!</p>
        </div>
    </nav>
  )
}

function daysBetween(date1, date2) {
  const timeDiff = date2.getTime() - date1.getTime();
  const daysDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24));
  return Math.abs(daysDiff);
}
