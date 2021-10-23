import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, SEO } from '../components'

const IndexPage = () => {
  return (
    <>
      <Layout className="container mx-auto max-w-screen-lg">
        <SEO
          title="Titre de la page SEO"
          description="Description de la page SEO"
        />
        <h1>test</h1>
      </Layout>
    </>
  )
}

export default IndexPage
