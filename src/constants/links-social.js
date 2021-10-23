import React from 'react'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa'
import { SiGooglemybusiness } from 'react-icons/si'

const data = [
  {
    id: 1,
    icon: (
      <FaLinkedin
        className="icon"
        alt="Linkedin"
        title="Notre page Linkedin"
        role="img"
      />
    ),
    alt: 'Linkedin',
    title: 'Notre page Linkedin',
    url: 'https://www.linkedin.com/company/novagaiafr/',
  },
  {
    id: 2,
    icon: (
      <FaFacebookSquare
        className="icon"
        alt="Facebook"
        title="Notre page Facebook"
        role="img"
      />
    ),
    alt: 'Facebook',
    title: 'Notre page Facebook',
    url: 'https://www.facebook.com/NovaGaia.fr/',
  },
  {
    id: 3,
    icon: (
      <FaTwitterSquare
        className="icon"
        alt="Twitter"
        title="Notre fil Twitter"
        role="img"
      />
    ),
    alt: 'Twitter',
    title: 'Notre fil Twitter',
    url: 'https://twitter.com/NovaGaiaFr/',
  },
  {
    id: 4,
    icon: (
      <FaInstagramSquare
        className="icon"
        alt="Instagram"
        title="Notre page Instagram"
        role="img"
      />
    ),
    alt: 'Instagram',
    title: 'Notre page Instagram',
    url: 'https://www.instagram.com/novagaiafr/?hl=fr',
  },
  {
    id: 5,
    icon: (
      <SiGooglemybusiness
        className="icon"
        alt="Google My Business"
        title="Notre page Google My Business"
        role="img"
      />
    ),
    alt: 'Google My Business',
    title: 'Notre page Google My Business',
    url: 'https://g.page/r/CUmY8ODsV6e7EAE',
  },
]

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ''}`}>
      {data.map(link => {
        return (
          <li key={link.id}>
            <a
              href={link.url}
              title={link.title}
              alt={link.alt}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
