import * as React from "react"
import Layout from "../components/Layout"
import Portada from "../components/Portada"
import ContenidoInicio from "../components/ContenidoInicio"
import useCursos from "../hooks/useCursos"
import CursoPreview from "../components/CursoPreview"
import './index.css'

const IndexPage = () => {
  const cursos = useCursos()

  return (
    <Layout>
      <Portada />
      <ContenidoInicio></ContenidoInicio>

      <center>
        <h1>Our available courses</h1>
      </center>
      <ul id="lista-cursos">
        {cursos.map(i => (
          <CursoPreview
          key={i.id}
          curso={i}
          ></CursoPreview>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
