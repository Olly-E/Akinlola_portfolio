import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaCodepen} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { headerIcons1, headerIcons2, headerIcons3 } from '../Animation';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <motion.a href="https://linkedin.com" target="_blank"
        variants={headerIcons3}
        initial="hidden"
        animate="show"
      ><BsLinkedin /></motion.a>
      <motion.a href="https://github.com" target="_blank"
        variants={headerIcons2}
        initial="hidden"
        animate="show"
      ><FaGithub /></motion.a>
      <motion.a href="https://codepen.com" target="_blank"
        variants={headerIcons1}
        initial="hidden"
        animate="show"
      ><FaCodepen /></motion.a>
    </div>
  );
}

export default HeaderSocials;
