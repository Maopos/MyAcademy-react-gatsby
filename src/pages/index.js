import * as React from "react"
import Layout from "../components/Layout"
import Portada from "../components/Portada"
import ContenidoInicio from "../components/ContenidoInicio"


const IndexPage = () => (
  <Layout>
    <Portada />
    <ContenidoInicio></ContenidoInicio>
  </Layout>
)

export default IndexPage
