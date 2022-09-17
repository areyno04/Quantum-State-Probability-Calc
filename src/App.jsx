import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import SpinHalf from './components/spinHalf/SpinHalf'
import SpinOne from './components/spinOne/SpinOne'
import Motivation from './components/motivation/Motivation'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <SpinHalf />
        <SpinOne />
        <Motivation />
    </>
  )
}

export default App
