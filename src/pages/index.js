import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, SEO } from '../components'
import Brands from '../assets/pictogrammes/Brands/Android'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Titre de la page SEO"
          description="Description de la page SEO"
        />
        <h1>
          <Brands />
          test
        </h1>
      </Layout>
    </>
  )
}

export default IndexPage
