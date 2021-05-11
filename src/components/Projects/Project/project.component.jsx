import React from 'react';
import './project.styles.scss';


const Project = ({ title, image, description,  site, source }) => {
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
      
      <p className='project__description'>{description}</p>
     <a
        className='project__sourceAnchor'
        href={source}
        target='_blank'
        rel='noopener noreferrer'
      >
        <small>view code</small>
      </a>
    </div>
  );
};

export default Project;
