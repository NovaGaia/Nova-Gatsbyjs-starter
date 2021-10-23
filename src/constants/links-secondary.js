import React from 'react'
import { Link } from 'gatsby'
const data = [
  {
    id: 1,
    text: 'Page 1',
    title: 'En savoir plus sur la page 1',
    url: '/page1/',
  },
  {
    id: 2,
    text: 'Page 2',
    title: 'En savoir plus sur la page 2',
    url: '/page2/',
  },
  {
    id: 3,
    text: 'Page 3',
    title: 'En savoir plus sur la page 3',
    url: '/page3/',
  },
  {
    id: 4,
    text: 'Mentions légales',
    title: 'La page des mentions légales',
    url: '/mentions-legales/',
  },
]

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ''}`}>
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url} title={link.title}>
              {link.text}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
