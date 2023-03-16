import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

export default function Navigation() {
  return (
    <nav className='Navigation'>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/redaction">Rédiger</Link>
        </li>
      </ul>
    </nav>
  )
}
