import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaBehanceSquare, FaGithub} from 'react-icons/fa';
import {CgFigma} from 'react-icons/cg'
import { motion } from 'framer-motion';
import { headerIcons1, headerIcons2, headerIcons3 } from '../Animation';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <motion.a href="https://www.linkedin.com/in/elijah-anibi-a2b4b8200" target="_blank"
        variants={headerIcons3}
        initial="hidden"
        animate="show"
        style={{color: '#1f1f38'}}
        whileHover={{color: 'var(--color-primary)'}}
      ><BsLinkedin /></motion.a>
      <motion.a href="https://www.behance.net/elijahakinola" target="_blank"
        variants={headerIcons2}
        initial="hidden"
        animate="show"
        style={{color: '#1f1f38'}}
        whileHover={{color: 'var(--color-primary)'}}
      ><FaBehanceSquare/></motion.a>
      <motion.a href="http://figma.com/@elijahanibi" target="_blank"
        variants={headerIcons1}
        initial="hidden"
        animate="show"
        style={{color: '#1f1f38'}}
        whileHover={{color: 'var(--color-primary)'}}
      ><CgFigma /></motion.a>
    </div>
  );
}

export default HeaderSocials;
