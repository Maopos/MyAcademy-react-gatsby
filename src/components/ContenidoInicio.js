import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./contenidoInicio.css"

const ContenidoInicio = () => {
  const info = useStaticQuery(graphql`
    {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  console.log(info.allDatoCmsPagina.nodes[0])

  const { titulo, contenido, imagen } = info.allDatoCmsPagina.nodes[0]

  return (
    <>
      <div id="inicio">
        <div id="col1-inicio">
          <center>
            <h2>{titulo}</h2>
            <p>{contenido}</p>
          </center>
        </div>
        <center>
          <img id="col2-inicio-img" src={imagen.fluid.srcSet} alt="imagen" />
        </center>
      </div>
    </>
  )
}

export default ContenidoInicio
