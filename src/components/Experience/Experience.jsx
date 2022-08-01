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
      >The Skills I have</motion.h5>
      <motion.h2
        variants={nameAnimation2b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
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
          >Frontend Development</motion.h3>
          <div className='experience__content'>
            <motion.article className='experience__details'
               variants={ExpTextBAnimation1}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
            >
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
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
              <h4>CSS</h4>
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
              <h4>JavaScript</h4>
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
              <h4>Tailwind</h4>
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
              <h4>Bootstrap</h4>
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
              <h4>React</h4>
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
              <h4>React Native</h4>
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
              <h4>Framer Motion</h4>
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
              <h4>Styled Components CSS</h4>
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
              <h4>Gatsby</h4>
              <small className="text-light">Intermediate</small>
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
              <h4>Photoshop</h4>
              <small className="text-light">Intermediate</small>
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
              <h4>Coreldraw</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experience;
