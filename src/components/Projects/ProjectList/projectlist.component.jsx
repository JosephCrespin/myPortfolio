import React from 'react';
import './projectlist.styles.scss';
import Project from '../Project/project.component';
import data from './data';


const ProjectList = () => {
  const projectList = data.map((project, index) => (
    <li className='projectsList__element' key={index}>
      <Project
        title={project.title}
        images={project.Images}
        description={project.description}
        technologies={project.technologies}
        site={project.site}
        source={project.source}
      />
    </li>
  ));

  return <ul className='projectsList'>{projectList}</ul>;
};

export default ProjectList;
