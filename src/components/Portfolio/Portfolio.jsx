import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import beuaty_parlor from '../../assets/beuaty_parlor.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Crypto fintech temporary page',
    github: 'https://github.com/Olly-E/PaybuymaxTemp',
    demo: 'http://www.paybuymax.com'
  },
  {
    id:2,
    image: beuaty_parlor,
    title: 'Blossom beauty site for all beauty services',
    github: 'https://github.com/Olly-E/Beauty-site',
    demo: 'https://nuelbeautysite.netlify.app/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Paybuymax Fintech app, trades digital assets and invests',
    github: 'http://github.com',
    demo: '#'
  },
  {
    id:4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'http://github.com',
    demo: '#'
  },
  {
    id:5,
    image: IMG5,
    title: 'Personal portfolio site',
    github: 'http://github.com',
    demo: '#'
  },
  {
    id:6,
    image: IMG6,
    title: 'Charts template and infographics in figma',
    github: 'http://github.com',
    demo: '#'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 style={{color: '#1f1f38'}}>My Recent Work</h5>
      <h2 style={{color: '#1f1f38'}}>Portfolio</h2>

      <div className="portfolio__container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
      </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio