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
      >What I offer</motion.h5>
      <motion.h2
        variants={nameAnimation2b}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
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
            >Web Development</motion.h3>
          </div>

          <ul className="service__list">
            <motion.li
              variants={ExpTextBAnimation1}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <BsCheck2 className="service__list-icons"/>
              <p>Building top-notch user interfaces for both web and app</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation2}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Develop prototypes and performs hands-on coding to develop and integrate the application user interface.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation3}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Translate graphic visual and interactive designs into interactive webapp and mobile</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation4}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Troubleshooting issues and solving problems where needed.</p>
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
              <p>Knowledge of UX.</p>
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
            >Mobile App Development</motion.h3>
          </div>

          <ul className="service__list">
            <motion.li
              variants={ExpTextBAnimation1}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
            >
              <BsCheck2 className="service__list-icons"/>
              <p>Architect, build and maintain excellent React Native applications with clean code.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation2}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Implement pixel perfect UI's that match designs specifications.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation3}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Implement clean, modern, smooth animations and transitions that provide an excellent user experience.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation4}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Integrate third-party API's.</p>
              </motion.li>
              <motion.li
                variants={ExpTextBAnimation5}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
              >
              <BsCheck2 className="service__list-icons"/>
              <p>Write unit and integration tests.</p>
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