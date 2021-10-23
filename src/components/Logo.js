import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LOGO from '../assets/logo.svg'

function Logo() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = siteMetadata

  return (
    <img
      src={LOGO}
      alt="logo"
      title={`${title} - Retour à l'accueil`}
      width="110px"
      height="75px"
      style={{ maxWidth: '110px' }}
    />
  )
}

export default Logo
