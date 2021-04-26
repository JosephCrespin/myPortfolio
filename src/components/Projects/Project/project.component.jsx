import React from 'react';
import './project.styles.scss';
import techs from './techsData';

const Project = ({ title, image, description, technologies, site, source }) => {
  const techList = technologies.map((tech, index) => (
    <li className='project__techList__element' key={index}>
      <a
        href={techs[`${tech}`].site}
        title={`${tech} website`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={techs[`${tech}`].logo} alt={`${tech} logo`} />
      </a>
    </li>
  ));
  return (
    <div className='project'>
      <h3 className='project__title'>{title}</h3>
      <a
        className='project__imageContainer'
        href={site}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='project__image'
          src={image}
          alt={`${title} project screenshot`}
        />
      </a>
      <a
        className='project__sourceAnchor'
        href={source}
        target='_blank'
        rel='noopener noreferrer'
      >
        <small>view source code</small>
      </a>
      <p className='project__description'>{description}</p>
      <ul className='project__techList'>{techList}</ul>
    </div>
  );
};

export default Project;
