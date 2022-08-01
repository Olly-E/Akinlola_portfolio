import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
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
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>akinsnuel@gmail.com</h5>
            <a href="akinsnuel@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Akinsiku Emmanuel</h5>
            <a href="https://m.me/nuel.akins" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+2348133946674</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348133946674" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="email" />
          <textarea name="message" placeholder="Your message..." rows="7" required></textarea>
          <button type="submit" class="btn btn-primary">Send Messaage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
