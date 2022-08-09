import React from 'react'
import './service.css';
import {BsCheck2} from 'react-icons/bs';
import { ExpTextBAnimation1, ExpTextBAnimation2, ExpTextBAnimation3, ExpTextBAnimation4, ExpTextBAnimation5, ExpTextBAnimation6, nameAnimation1b, nameAnimation2b, serviceAnimation } from '../Animation';
import {motion} from 'framer-motion';

const Service = () => {
  return (
    <section id="services">
      <motion.h5
        variants={nameAnimation1b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        style={{color: '#1f1f38'}}
      >What I offer</motion.h5>
      <motion.h2
        variants={nameAnimation2b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        style={{color: '#1f1f38'}}
      >Services</motion.h2>
      <div className="container services__container">
        <motion.article className="service"
          variants={serviceAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          <div className="service__head">
            <motion.h3
              variants={serviceAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >UI / UX DESIGNER</motion.h3>
          </div>

          <ul className="service__list">
            <motion.li
              variants={ExpTextBAnimation1}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <BsCheck2 className="service__list-icons"/>
              <p>Gathering and evaluating user requirements, in collaboration with product managers and engineers.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation2}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Illustrating design ideas using storyboards, process flows and sitemaps.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation3}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Designing graphic user interface elements, like menus, tabs and widgets.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation4}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Build page navigation buttons and search fields.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation5}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Writing efficient JavaScript code while also using HTML and CSS.</p>
            </motion.li>
            <motion.li
              variants={ExpTextBAnimation6}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <BsCheck2 className="service__list-icons"/>
              <p>Develop UI mockups and prototypes that clearly illustrate how sites function and look like.</p>
            </motion.li>
          </ul>
        </motion.article>
        {/* ui ux */}
        <motion.article className="service"
          variants={ExpTextBAnimation1}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          <div className="service__head">
            <motion.h3
              variants={serviceAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >GRAPHICS DESIGN</motion.h3>
          </div>

          <ul className="service__list">
            <motion.li
              variants={ExpTextBAnimation1}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <BsCheck2 className="service__list-icons"/>
              <p>Study design briefs and determine requirements.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation2}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Test graphics across various media.
</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation3}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Amend designs after feedback.
</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation4}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Work with copywriters and creative director to produce final design.
</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation5}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Use the appropriate colors and layouts for each graphic.
</p>
            </motion.li>
          </ul>
        </motion.article>
        {/*  content creation*/}
        {/* <articles className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </li>
              <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icons"/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </articles> */}
        </div>
    </section>
  )
}

export default Service