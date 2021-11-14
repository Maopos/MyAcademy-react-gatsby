import React from "react"
import { Link } from "gatsby"
import "./header.css"

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" activeClassName="paginaActual" to="/">
        Inicio
      </Link>
      <Link className="nav-link" activeClassName="paginaActual" to="/nosotros">
        Nosotros
      </Link>
    </nav>
  )
}

export default Nav
