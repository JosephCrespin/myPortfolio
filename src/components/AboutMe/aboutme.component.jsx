import React from 'react';
import './aboutme.styles.scss';
import me from '../../images/me.png';
const AboutMe = () => {
  return (
    <section className='aboutMe' id='about-me'>
      <div className='aboutMe__container'>
        <h2 className='aboutMe__container__title'>about me</h2>
        <div className='aboutMe__container__picContainer'>
          <span></span>
          <img src={me} alt='Lucía Martínez' />
          <span></span>
        </div>
        <div className='aboutMe__container__body'>
          <p>
            Born in Venezuela, I found that I loved two things, programming and
            design. I started studying Computer Science at{' '}
            <a
              href='http://www.usb.ve/'
              title='Go to Simon Bolívar University'
              target='_blank'
              rel='noopener noreferrer'
            >
              Simón Bolívar University
            </a>
            , but due to political issues in Venezuela, I moved to Spain without
            finishing my degree.
          </p>
          <p>
            In Spain I became a self-taught learner. Bypassing the traditional
            education system, I decided to study via all the docs on the
            internet that I can have time to study, using platforms such as
            Udemy, Khan Academy, Skillshare, Coursera, Domestika and more.
          </p>
          <p>
            I've also enrolled on courses such as to become a Front-End
            Developer in{' '}
            <a
              href='https://adalab.es/'
              title='Go to Adalab'
              target='_blank'
              rel='noopener noreferrer'
            >
              Adalab
            </a>
            , or a more intensive course that I'm currently doing to become a
            Computer Scientist in{' '}
            <a
              href='https://www.42madrid.com/'
              title='Go to 42 Madrid'
              target='_blank'
              rel='noopener noreferrer'
            >
              42 Madrid
            </a>
            .
          </p>
          <p>
            Since all of this, I've worked as a freelance graphic designer, and
            a freelance web dev. I have dealed with customers, and consider
            myself an independent and fast learner, but in my experience with
            collaborative programming and working, I put my heart on the
            following phrase "Together, we can go further"
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
