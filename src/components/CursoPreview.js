import React from "react"
import { Link } from "gatsby"
import './cursopreview.css'

const CursoPreview = ({ curso }) => {
  const { titulo, contenido, imagen, slug } = curso

  return (
    <div className="cursos">
        <img id="curso-img" src={imagen.fluid.srcSet} alt="" />
      <div className="curso-card">
        <h3>{titulo}</h3>
        <p>{contenido}</p>
        <Link id="boton-curso" to={slug}>Get in</Link>
      </div>
    </div>
  )
}

export default CursoPreview
