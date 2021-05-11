import React from 'react';
import './hero.styles.scss';



const Hero = () => {
  return (
    
    <section className='hero'>
      <div className='hero__container'>
        <small className='hero__container__title'>
          (Hello 👋! Joseph here!)
        </small>
        <p className='hero__container__body'>
          I'm a web developer living in Spain [Barcelona]
          <span role='img' aria-label='✨ Sparkles Emoji'>
            👨🏽‍🎤
          </span>
          also , you cant download 👉🏽
          <a className="cv"href="JosephCrespinCV.pdf" download="JosephCrespinCV.pdf">
          <button>My CV</button>
        </a>
          
        </p>
        
      </div>
    </section>
    
  );
};

export default Hero;
