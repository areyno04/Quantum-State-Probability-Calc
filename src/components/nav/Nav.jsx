import React from 'react'
import './nav.css'
import {TbCircleHalf2} from 'react-icons/tb'
import {FaCircle} from 'react-icons/fa'
import {BsLightbulb} from 'react-icons/bs'
import {RiHomeSmileFill} from 'react-icons/ri'
import{useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={ () => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><RiHomeSmileFill /></a>
      <a href="#spinHalf" onClick={ () => setActiveNav('#spinHalf')} className={activeNav === '#spinHalf' ? 'active' : ''}><TbCircleHalf2 /></a>
      <a href="#spinOne" onClick={ () => setActiveNav('#spinOne')} className={activeNav === '#spinOne' ? 'active' : ''}><FaCircle /></a>
      <a href="#motivation" onClick={ () => setActiveNav('#motivation')} className={activeNav === '#motivation' ? 'active' : ''}><BsLightbulb /></a>
    </nav>
  )
}

export default Nav