import React from "react"
import { graphql } from "gatsby"
import Layout from "./Layout"
import "./cursos.css"
import { Link } from "gatsby"

export const queryCursos = graphql`
  query ($slug: String!) {
    allDatoCmsCurso(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid {
            srcSet
          }
        }
        slug
      }
    }
  }
`

const Cursos = ({ data }) => {
  //console.log(data)

  const { titulo, contenido, imagen } = data.allDatoCmsCurso.nodes[0]

  return (
    <Layout>
      <div className="curso-page">
        <h2>{titulo}</h2>
        <img id="img-curso-page" src={imagen.fluid.srcSet} alt="" />
        <p>{contenido}</p>
        <Link id="subscribe" to={'/'}>Subscribe</Link>
      </div>
    </Layout>
  )
}

export default Cursos
