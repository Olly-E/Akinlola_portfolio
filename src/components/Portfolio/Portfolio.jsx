import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio7.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import beuaty_parlor from '../../assets/beuaty_parlor.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Landing page',
    figma: 'https://www.figma.com/proto/Dn9P5PDXQ9YlVljWNbqGtA/Landing-Page-Templates?page-id=0%3A1&node-id=2%3A2&viewport=-121%2C410%2C0.13&scaling=scale-down-width',
    demo: 'https://www.figma.com/proto/Dn9P5PDXQ9YlVljWNbqGtA/Landing-Page-Templates?page-id=0%3A1&node-id=2%3A2&viewport=-121%2C410%2C0.13&scaling=scale-down-width'
  },
  {
    id:2,
    image: IMG2,
    title: 'Agricultural website',
    figma: 'https://www.figma.com/proto/Y7qmrcP0gPogPD63irbOp2/Plantrees?page-id=0%3A1&node-id=66%3A307&starting-point-node-id=66%3A307&scaling=scale-down',
    demo: 'https://nuelbeautysite.netlify.app/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Paybuymax Fintech webapp',
    figma: 'https://paybuymaxtesting.netlify.app/',
    demo: '#'
  },
  {
    id:4,
    image: IMG4,
    title: 'Board game web app',
    figma: 'https://www.figma.com/proto/muZAMdyz2dDqnDme8xgr6E/Game-Board-Web_Application?page-id=0%3A1&node-id=15%3A217&scaling=scale-down',
    demo: '#'
  },
  {
    id:5,
    image: IMG5,
    title: 'Clothing E-commerce',
    figma: 'https://www.figma.com/proto/XroZ7ZWOpsbrF4F3NcWkSq/D-Clot?page-id=0%3A1&node-id=7%3A18&viewport=1246%2C735%2C0.25&scaling=scale-down-width',
    demo: '#'
  },
  {
    id:6,
    image: IMG6,
    title: 'Building Contsruction Website',
    figma: 'https://www.figma.com/proto/byZhyGiqzZEvotAItSrVoN/SP-Project?page-id=0%3A1&node-id=32%3A98&viewport=246%2C297%2C0.04&scaling=scale-down',
    demo: '#'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 style={{color: '#1f1f38'}}>My Recent Work</h5>
      <h2 style={{color: '#1f1f38'}}>Portfolio</h2>

      <div className="portfolio__container">
        {data.map(({id, image, title, figma, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={figma} className='btn'>Figma</a>
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