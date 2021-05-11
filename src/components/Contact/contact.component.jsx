import React from 'react';
import './contact.styles.scss';
import Formulary from './Formulary/formulary.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact__container'>
        <h2 className='contact__container__title'>Need to reach? I'm one click away!</h2>
        <Formulary />
        <div className='contact__container__socialContainer'>
          <h3 className='contact__container__socialContainer__title'>
            ...Or hit me up at
          </h3>
          <ul className='contact__container__socialContainer__list'>
            <li>
              <a
                href='https://www.github.com/JosephCrespin'
                title='Go to my Github page'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/josephcrespin'
                title='Go to my LinkedIn page'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com/IsmaX321'
                title='Go to my Twitter page'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
