import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-img">
        <img src="about.jpg" alt="about" />
      </div>
      <div className="about-text">
        <small>ABOUT OUR COMPANY</small>
        <h2>We are Go Trip Ravels Support Company</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud</p>

        <label><input type="checkbox" checked readOnly />Lorem ipsum dolor sit amet</label>
        <label><input type="checkbox" checked readOnly />consectetur adipisicing elit</label>
        <label><input type="checkbox" checked readOnly />Architecto atque consequuntur</label>
        <label><input type="checkbox" checked readOnly />cupiditate doloremque ducimus</label>
        <a href="#about" className="about-link">ABOUT US</a>
      </div>
    </section>
  );
};

export default About;