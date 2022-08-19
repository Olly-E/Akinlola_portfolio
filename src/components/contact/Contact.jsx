import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fwevu46', "template_cnxhe8b", form.current, 
      "_Ykk3DhR2U2VEPvn2")
      e.target.reset();
  };
  
  return (
    <section id="contact">
      <h5 style={{color: '#1f1f38'}}>Get in touch</h5>
      <h2 style={{color: '#1f1f38'}}>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>elijahanibi@gmail.com</h5>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=elijahanibi@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin  className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>Anibi Elijah</h5>
            <a href="https://www.linkedin.com/in/elijah-anibi-a2b4b8200" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+2349039459108</h5>
            <a href="https://wa.me/+2349039459108" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="email" />
          <textarea name="message" placeholder="Your message..." rows="7" required></textarea>
          <button type="submit" class="btn-pri">Send Messaage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
