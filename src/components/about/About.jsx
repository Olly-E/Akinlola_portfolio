import './about.css'
import React, {useRef} from 'react'
// import ME from '../../assets/me-about.jpg'
import newnew from '../../assets/newnew.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc';
import {motion} from 'framer-motion';
import { cardAnimation1, cardAnimation2, cardAnimation3, cardTextAnimation, cardTextBAnimation, meImgAnimation, nameAnimation1b, nameAnimation2b } from '../Animation';


const About = () => {

  return (
    <section id="about" >
      <motion.h5 style={{color: '#1f1f38'}}
        variants={nameAnimation1b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
      >Get to know</motion.h5>
      <motion.h2
      style={{color: '#1f1f38'}}
        variants={nameAnimation2b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
      >About Me</motion.h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <motion.img src={newnew} alt="about image" 
              variants={meImgAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            />
          </div>
        </div>
        
        <div className="about__content">
        <div className="about__cards">
          <motion.article className="about__card"
            variants={cardAnimation1}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
          >
            <FaAward className="about__icons" />
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </motion.article>
          <motion.article className="about__card"
            variants={cardAnimation2}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
          >
            <FiUsers className="about__icons" />
            <h5>Clients</h5>
            <small>30+ Nationwide</small>
          </motion.article>
          <motion.article className="about__card"
            variants={cardAnimation3}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
          >
            <VscFolderLibrary className="about__icons" />
            <h5>Projects</h5>
            <small>20+ completed Projects</small>
          </motion.article>
        </div>
        <motion.p
          variants={cardTextAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          style={{color: '#1f1f38'}}
        >
        Individual with love for designs and unique challenges, imbued overtime with problem solving skills. A full time UI/UX and graphics designer with ability to design responsive websites and web apps for buisness of varying sizes, with eye catching UI designs and complete web functionality that makes them stand out from the ordinary.
        </motion.p>

        <motion.a href="#contact" className='btn btn-primary'
          variants={cardTextBAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >Let's talk</motion.a>
        </div>
      </div>
    </section>
  )
}

export default About