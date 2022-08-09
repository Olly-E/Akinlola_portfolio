import React from 'react';
import CV from '../../assets/cv.pdf';
import { motion } from 'framer-motion';
import { ctaAnimation, CTAnimation1, CTAnimation2 } from '../Animation';

const CTA = () => {
  return (
    <motion.div className="cta" >
      <motion.a href={CV} download className="btn"
        variants={CTAnimation2}
        initial="hidden"
        animate="show"
        style={{borderColor: '#1f1f38', color: '#1f1f38'}}
      >Download CV</motion.a>
      <motion.a href="#contact" className="btn btn-primary"
        variants={CTAnimation1}
        initial="hidden"
        animate="show"
      >Let's Talk</motion.a>
    </motion.div>
  );
}

export default CTA;
