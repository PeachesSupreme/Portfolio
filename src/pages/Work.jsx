import React from "react";

const Work = () => {
  return (
    <>
      <h1>Work and Projects</h1>
      <div className="quick-links">
        <h3>Check out my work and projects on my github</h3>
        <a
          href="https://github.com/RCrowley002"
          target="_blank"
          className="img-link"
        >
          <img src="images/github.png" alt="github" />
        </a>
        <hr className="seperator" />
      </div>
      <div className="content-container">
        <div className="para-container">
          <h3>React project: Shopping site</h3>
          <p>
            I had the privilege of working on an exciting project where I
            developed a comprehensive e-commerce checkout system using React.js.
            The project involved creating a dynamic user interface for
            collecting customer information, managing the shopping cart, and
            facilitating secure payments. I utilized JavaScript to implement
            interactive features, such as dropdown menus for payment selection
            and a responsive design for various screen sizes. To manage the
            state of the application, I leveraged React's Context API to
            efficiently share data between components. Additionally, I employed
            CSS for styling and layout, ensuring a visually appealing and
            intuitive user experience. To enhance functionality, I incorporated
            RESTful API calls to interact with a backend server and a JSON
            database, enabling seamless data retrieval and manipulation. The
            project showcased my proficiency in frontend technologies and my
            ability to integrate diverse elements into a cohesive, user-friendly
            application
          </p>
        </div>

        <div className="img-container">
          <img src="images/penpage1.png" alt="pen page" className="para-img" />
          <img src="images/penpage2.png" alt="pen page" className="para-img" />
          <img src="images/penpage3.png" alt="pen page" className="para-img" />
        </div>
      </div>
      <hr className="seperator2" />
      <div className="content-container">
        <div className="para-container">
          <h3>React project: API doggie database</h3>
          <p>
            I had the opportunity to work on a simpler project earlier this
            year, focusing on a React app that leveraged an online API to fetch
            and display images of dogs based on user-selected breed and quantity
            preferences. Using React components and state management, I
            developed an interactive interface that allowed users to select
            their preferred breed from a list and specify the number of images
            they wanted to see. The app then utilized API requests to
            dynamically fetch the images and present them in an engaging and
            visually appealing manner. This project enhanced my proficiency in
            React, API integration, and user interface design, as well as my
            ability to create interactive and responsive applications that
            deliver a delightful user experience.
          </p>
        </div>

        <div className="img-container">
          <img src="images/dog1.png" alt="dog page" className="para-img" />
          <img src="images/dog2.png" alt="dog page" className="para-img" />
        </div>
      </div>
      <hr className="seperator2" />
    </>
  );
};

export default Work;
