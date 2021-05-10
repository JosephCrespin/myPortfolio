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
       <img alt="blog" src="../../images/blog.gif" width="65px"></img>
      <p>
        On Construction, for you{' '}
        <span role='img' aria-label='😉 Wink Emoji'>
          😉
        </span>
      </p>
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
