import React from 'react'
import { Link } from 'react-router-dom'
import sdhubimage from '../assets/sd-hublogo.png'

const Header = () => {
  return (
    <header className="bg-sky-300 px-4 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <img src={sdhubimage} alt="logo" className="h-10 w-auto" />
      </div>
      <nav className="flex gap-4 text-white font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
