import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router';

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
        <div className="navbar-links">
          <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/story">Story</CustomLink>
            <CustomLink to="/photos">Photos</CustomLink>
            <CustomLink to="/event">Event Info</CustomLink>
            <CustomLink to="/rsvp">RSVP</CustomLink>
          </ul>
        </div>
    </nav>
  )
}

function daysBetween(date1, date2) {
  const timeDiff = date2.getTime() - date1.getTime();
  const daysDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24));
  return Math.abs(daysDiff);
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active": ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )

}