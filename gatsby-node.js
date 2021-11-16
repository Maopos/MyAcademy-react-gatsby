exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsCurso {
        nodes {
          slug
        }
      }
    }
  `)
  //console.log(resultado.data.allDatoCmsCurso.nodes);
  if (resultado.errors) {
    reporter.panic("No se encontraron resultados...", resultado.errors)
  }

  // Crear los archivos
  const cursos = resultado.data.allDatoCmsCurso.nodes

  cursos.forEach(i => {
    actions.createPage({
      path: i.slug,
      component: require.resolve('./src/components/Cursos.js'),
      context: {
        slug: i.slug
      }
    })
  });
}
