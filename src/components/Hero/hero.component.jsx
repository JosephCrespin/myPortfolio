import React from 'react';
import './hero.styles.scss';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <small className='hero__container__title'>
          (Hi, I'm Lucía Martínez)
        </small>
        <p className='hero__container__body'>
          I'm a web developer living in Spain. Currently in love with React.js,
          Node.js and Express.js. Wanting to create beautiful, responsive and
          useful sites
          <span role='img' aria-label='✨ Sparkles Emoji'>
            ✨
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
