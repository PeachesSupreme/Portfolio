import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-text">
          <h1>Hi,</h1>
          <h1>I'm Ryan,</h1>
          <h1>Full-stack Developer</h1>
          <p>Turning ideas into reality</p>
        </div>
        <img className="home-image" src="images/ryan.png" alt="home page" />
      </div>
      <div className="para-container">
        <Link to="/work" className="nav-link">
          <h2>Recent Work</h2>
        </Link>
        <p>
          I had the privilege of working on an exciting project where I
          developed a comprehensive e-commerce checkout system using React.js.
          The project involved creating a dynamic user interface for collecting
          customer information, managing the shopping cart, and facilitating
          secure payments. I utilized JavaScript to implement interactive
          features, such as dropdown menus for payment selection and a
          responsive design for various screen sizes. To manage the state of the
          application, I leveraged React's Context API to efficiently share data
          between components. Additionally, I employed CSS for styling and
          layout, ensuring a visually appealing and intuitive user experience.
          To enhance functionality, I incorporated RESTful API calls to interact
          with a backend server and a JSON database, enabling seamless data
          retrieval and manipulation. The project showcased my proficiency in
          frontend technologies and my ability to integrate diverse elements
          into a cohesive, user-friendly application
        </p>
        <hr className="seperator" />
      </div>
      <div className="para-container">
        <Link to="/blog" className="nav-link">
          <h2>Recent Blog</h2>
        </Link>
      </div>
    </>
  );
};

export default Home;
