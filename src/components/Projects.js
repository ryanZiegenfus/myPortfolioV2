import React, { useState } from 'react';
import uuidv4 from "uuid";
import { config } from "react-spring";
import Carousel from 'react-spring-3d-carousel';

function Projects() {

    const[goToSlide, setGoToSlide] = useState()
    const[showNavigation, setShowNavigation] = useState(true)

    const clicking = () => {

    }

    let slides = [
        {
          key: uuidv4(),
          content: <img src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="1" />
        },
        {
          key: uuidv4(),
          content: <img src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="2" />
        },
        {
          key: uuidv4(),
          content: <img src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="3" />
        },
        {
          key: uuidv4(),
          content: <img src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="4" />
        },
        {
          key: uuidv4(),
          content: <div style={{ height: "100%" }} onClick={clicking} ><img src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="5" /></div>
        }
      ];

    return (
        <div className="carousel">
            <Carousel slides={slides} goToSlide={goToSlide} showNavigation={showNavigation} config={config.gentle} offsetRadius={12}/>
        </div>
    );
}

export default Projects;
