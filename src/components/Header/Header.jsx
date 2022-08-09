import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import { motion } from 'framer-motion';
import {  headerIcons3, headerIcons4, MeAnimation, meImgAnimation, nameAnimation1, nameAnimation2, nameAnimation3} from '../Animation';
import {useScroll} from '../UseScroll'

const Header = () => {
  const [element, controls] = useScroll();
  return (
    <header>
       <div className="container header__container">
         <motion.h5
          variants={nameAnimation1}
          initial="hidden"
          animate="show"
          style={{color: '#1f1f38'}}
         >Hello I'm</motion.h5>
         <motion.h1
          variants={nameAnimation2}
          initial="hidden"
          animate="show"
          style={{color: '#1f1f38'}}
         >Anibi Elijah A.</motion.h1>
         <motion.h5 className="text-light"
          variants={nameAnimation3}
          initial="hidden"
          animate="show"
          style={{color: '#1f1f38'}}
         >Graphics, UI/UX/ Designer</motion.h5>
         <CTA />
         <HeaderSocials />
         <motion.div className='Invisible'
          variants={MeAnimation}
          initial="hidden"
          animate="show"
         >
         <div className="me">
           <motion.img src={ME} alt="me"
            variants={meImgAnimation}
            initial="hidden"
            animate="show"
           />
         </div>
         </motion.div>
         <motion.a href="#contact" className="scroll__down"
          variants={headerIcons4}
          initial="hidden"
          animate="show"
          whileHover={{color: 'var(--color-primary)'}}
          
         >Scroll Down</motion.a>
       </div>
    </header>
  );
}

export default Header;