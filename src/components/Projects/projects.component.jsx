import React from 'react';
import './projects.styles.scss';
import ProjectList from './ProjectList/projectlist.component';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='projects__container'>
        <h2 className='projects__container__title'>Some projects</h2>
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
