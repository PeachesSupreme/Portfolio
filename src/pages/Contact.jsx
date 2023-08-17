import React from "react";

const Contact = () => {
  return (
    <>
      <h1>Let's have a chat</h1>
      <div className="quick-links">
        <p>
          You can contact me below. Send me an e-mail or connect with me through
          LinkedIn:
        </p>
        <a href="mailto:ryan.g.crowley@gmail.com" target="_blank">
          Ryan.G.Crowley@Gmail.com
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/ryan-crowley-08252827b/"
          target="_blank"
          className="img-link"
        >
          <img src="images/linkedin.png" alt="linkedin" />
        </a>
        <hr className="seperator" />
      </div>
    </>
  );
};

export default Contact;
