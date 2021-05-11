import React from 'react';
import './hero.styles.scss';

const Hero = () => {
  return (
    
    <section className='hero'>
      <div className='hero__container'>
        <small className='hero__container__title'>
          (Hi, I'm Joseph Crespin)
        </small>
        <p className='hero__container__body'>
          I'm a web developer living in Spain. Currently in love with JavaScript, React.js and laravel Wanting to create beautiful and responsive sites
          <span role='img' aria-label='✨ Sparkles Emoji'>
            👨🏽‍🎤
          </span>
          <button  type="button" class="nes-btn is-primary pixel_font">My CV</button>
        </p>
        
      </div>
    </section>
    
  );
};

export default Hero;
