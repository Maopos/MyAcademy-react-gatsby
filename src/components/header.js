import React from "react"
import logo from "../images/logo.png"
import Nav from "./Nav"
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="navb">
        <div className="brand">
          <img id="logo" alt="logo" src={logo} />
          <h1>My Academy</h1>
        </div>
        <Nav></Nav>
      </div>
    </header>
  )
}

export default Header
