import React from "react"
import { Link } from "gatsby"
import "./header.css"

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" activeClassName="paginaActual" to="/">
        Home
      </Link>
      <Link className="nav-link" activeClassName="paginaActual" to="/nosotros">
        About us
      </Link>
    </nav>
  )
}

export default Nav
