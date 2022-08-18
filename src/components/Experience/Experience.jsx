import './experience.css';
import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { containerVariants, ExpContAnimation, ExpTextBAnimation1, ExpTextBAnimation2, ExpTextBAnimation3, ExpTextBAnimation4, ExpTextBAnimation5, ExpTextBAnimation6, FrontEnd, nameAnimation1b, nameAnimation2, nameAnimation2b } from '../Animation';

const Experience = () => {
  return (
    <section id="experience">
      <motion.h5
        variants={nameAnimation1b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        style={{color: '#1f1f38'}}
      >The Skills I have</motion.h5>
      <motion.h2
        variants={nameAnimation2b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        style={{color: '#1f1f38'}}
      >My Experience</motion.h2>

      <motion.div className="container experience__container"
       variants={containerVariants}
       initial="hidden"
       animate="show"
      >
        <motion.div className="experience__frontened"
          
        >
          <div className='biggy' ></div>
          <motion.h3
          variants={FrontEnd}
          initial="hidden"
          animate="show"
          >UI/UX Design</motion.h3>
          <div className='experience__content'>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation1}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation1}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Design Strategy</h4>
              <small className="text-light">Experienced</small>
              </div>
            </motion.article>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation2}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Illustrator</h4>
              <small className="text-light">Experienced</small>
              </div>
            </motion.article>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation2}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Photoshop</h4>
              <small className="text-light">Experienced</small>
              </div>
            </motion.article>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation3}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Adobe XD</h4>
              <small className="text-light">Experienced</small>
              </div>
            </motion.article>
              <motion.article className='experience__details'
                 variants={ExpTextBAnimation3}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
              >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Journey Map</h4>
              <small className="text-light">Expericed</small>
              </div>
            </motion.article>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation4}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>prototyping</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </motion.article>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation4}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Usability Testing</h4>
              <small className="text-light">Experienced</small>
              </div>
            </motion.article>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation5}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Graphic Design</h4>
              <small className="text-light">Experienced</small>
              </div>
            </motion.article>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation6}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>CRM Skills</h4>
              <small className="text-light">Expert</small>
              </div>
            </motion.article>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation6}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Analytic Skills</h4>
              <small className="text-light">Expert</small>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experience;
