import React from "react";

const SocialBar = () => {
  return (
    <div className="widget-bar">
      <a
        href="https://www.linkedin.com/in/ryan-crowley-08252827b/"
        target="_blank"
      >
        <img src="images/linkedin.png" alt="github" className="widget-img" />
      </a>
      <a href="mailto:ryan.g.crowley@gmail.com" target="_blank">
        <img src="images/gmail.jpg" alt="github" className="widget-img" />
      </a>
      <a href="https://github.com/RCrowley002" target="_blank">
        <img src="images/github.png" alt="github" className="widget-img" />
      </a>
      <a href="https://twitter.com/RCColaUnleashed" target="_blank">
        <img src="images/twitter.png" alt="github" className="widget-img" />
      </a>
      <a href="https://www.instagram.com/peaches_rc/?hl=en" target="_blank">
        <img src="images/instagram.jpg" alt="github" className="widget-img" />
      </a>
    </div>
  );
};

export default SocialBar;
