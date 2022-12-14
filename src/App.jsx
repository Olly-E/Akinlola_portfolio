import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/about/About';
import Experience from './components/Experience/Experience'
import Service from './components/Service/Service'
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Nav />
    <div style={{background: 'rgba(255, 255, 255, 0.5) ', backdropFilter: 'blur(10px)', width: '90%', margin: 'auto'}}>
      <Header />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;