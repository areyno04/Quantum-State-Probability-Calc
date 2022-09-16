import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header id="header">
        <div className="container header_container">
            <h1>Quantum State Probability Calculator</h1>
            <h5 className="text-light">For Spin Half and Spin One Systems</h5>
        </div>
    </header>
  )
}

export default Header