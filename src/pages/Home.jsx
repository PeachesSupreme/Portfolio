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
          Developed an e-commerce checkout system using React.js that showcased
          proficiency in frontend technologies, interactive features, responsive
          design, and data integration. Leveraged React's Context API for
          efficient state management and incorporated RESTful API calls for
          seamless data interaction with a backend server and JSON database. The
          outcome was a comprehensive and user-friendly e-commerce solution.
        </p>
        <img src="images/penpage1.png" alt="pen page" />
        <hr className="seperator" />
      </div>
      <div className="para-container">
        <Link to="/blog" className="nav-link">
          <h2>Recent Blog</h2>
        </Link>
        <p>
          In the world of collectibles, a digital revolution is underway that is
          redefining the way we perceive ownership and authenticity.
          Non-Fungible Tokens (NFTs) have emerged as a groundbreaking technology
          that has opened up new avenues for collectors, artists, and industries
          alike. With major players like the NFL, UFC, and NBA endorsing and
          licensing these digital assets, the future of collectibles has taken
          an exciting and transformative turn.
        </p>
        <img src="images/dapper.jpg" alt="dapper" />
        <hr className="seperator" />
      </div>
    </>
  );
};

export default Home;
