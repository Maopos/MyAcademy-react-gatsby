import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./contenidoNosotros.css"

const ContenidoNosotros = () => {
  const info = useStaticQuery(graphql`
    {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
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

  //console.log(info.allDatoCmsPagina.nodes[0])

  const { titulo, contenido, imagen } = info.allDatoCmsPagina.nodes[0]

  return (
    <>
      <center>
        <h2 id="nosotros-titulo">{titulo}</h2>
      </center>
      <div id="nosotros">
        <div id="col1-nosotros">
          <center>
            <p>{contenido}</p>
          </center>
        </div>
        <center>
          <img id="col2-nosotros-img" src={imagen.fluid.srcSet} alt="imagen" />
        </center>
      </div>
    </>
  )
}

export default ContenidoNosotros
