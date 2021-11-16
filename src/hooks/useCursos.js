import { graphql, useStaticQuery } from "gatsby"

const useCursos = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsCurso {
        nodes {
          id
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
  `)

  //console.log(data.allDatoCmsCurso.nodes)

  return data.allDatoCmsCurso.nodes.map(i => ({
    titulo: i.titulo,
    contenido: i.contenido,
    id: i.id,
    imagen: i.imagen,
    slug: i.slug,
  }))
}

export default useCursos
