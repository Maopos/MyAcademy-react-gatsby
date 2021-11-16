import React from "react"
import logo from "../images/logo.png"
import Nav from "./Nav"
import "./header.css"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div className="navb">
        <div className="brand">
          <img id="logo" alt="logo" src={logo} />
          <Link id="brand-title" to={'/'}>
            <h1>My Academy</h1>
          </Link>
        </div>
        <Nav></Nav>
      </div>
    </header>
  )
}

export default Header
