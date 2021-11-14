import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./portada.css"

const Portada = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "estudiante.jpg" }) {
        sharp: childImageSharp {
          fluid {
            srcSetWebp
          }
        }
      }
    }
  `)

  //console.log(image.sharp.fluid)

  return (
    <BackgroundImage
      Tag="section"
      fluid={image.sharp.fluid}
      fadeIn="soft"
      className="portada"
    >
      <div className="saludo">
        <center>
          <h2>Join now!</h2>
          <p>Apply to the Best Programming School today.</p>
        </center>
      </div>
    </BackgroundImage>
  )
}

export default Portada
