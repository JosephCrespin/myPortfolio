import React, { useEffect, useState } from 'react';
import './blog.styles.scss';
import Particles from "react-tsparticles";
import particles from '../../configs/particles.json'

const Blog = () => {
  const [docHeight, setDocHeight] = useState(document.documentElement.offsetHeight);
  const [docWidth, setDocWidth] = useState(document.documentElement.clientWidth);

  const updateWidthAndHeight = () => {
    setDocHeight(document.documentElement.offsetHeight);
    setDocWidth(document.documentElement.clientWidth);
  };
  useEffect(() => {
    updateWidthAndHeight();
  }, [])
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
  })

  return (
    <React.Fragment>
    <Particles
    className={"particleTop"}
    width={docWidth}
    height={docHeight - 0.2*docHeight}
    options={particles} />
    <main className='blog'>

        <div
         className="SimpGif"><img alt="simpsons" src="/Simpsons.gif" width="300px"></img> 
         <p className="advice">Please don't put pressure on me, this section is still under construction</p>
        </div>
       
      
    </main>
    <Particles
    className={"particleBottom"}
    width={docWidth}
    height={docHeight - 0.2*docHeight}
    options={particles} />
      </React.Fragment>
  );
};

export default Blog;
