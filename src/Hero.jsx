import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Welcome</h1>
          <p>
            This mini web portfolio showcases a collection of small projects I
            built to deepen my understanding of React’s core concepts. Each
            project is designed to tackle specific challenges in React,
            demonstrating practical implementations of key principles and tools.
            The portfolio highlights my experience with fundamental React
            concepts, such as components, state management, and props, as well
            as more advanced topics like hooks and context API. Additionally, it
            showcases how I integrate Redux for global state management and use
            React-Query to efficiently manage and cache server-side data.
            Through these projects, I also explore React Router for dynamic
            routing, form handling with libraries like Formik, and API requests
            using Axios. Each project reflects my effort to not just understand
            the theory but also implement real-world solutions. Whether it's a
            to-do list with persistent state, a weather app with API
            integration, or a dashboard with authentication and protected
            routes, these examples demonstrate my ability to build scalable and
            modular React applications. This portfolio serves as both a learning
            tool and a showcase of my growing expertise in React, giving a clear
            picture of how I’ve progressed as a developer through hands-on
            experience.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
