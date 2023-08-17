import React from "react";

const About = () => {
  return (
    <>
      <h1>About Me</h1>
      <div className="quick-links">
        <p>
          I'm Ryan Crowley, a software development student with a passion for
          creating innovative solutions. Hailing from the vibrant city of St.
          John's, Newfoundland, I'm on a mission to become a skilled developer.
          Currently mastering the art of full stack development, I'm also proud
          to hold a micro-credential badge from AWS. My journey is driven by a
          thirst for knowledge and a commitment to pushing the boundaries of
          technology. Let's connect and collaborate to shape the digital world
          together.
        </p>
        <a
          href="https://www.credly.com/badges/2290e990-1edf-4b80-a51f-28f698a86883/public_url"
          target="_blank"
          className="img-link"
        >
          <img src="images/awsbadge.png" alt="badge" />
        </a>
        <hr className="seperator" />
      </div>

      <div className="para-container">
        <p>
          My life-long interest in gaming is what initially opened my eyes to
          the power of technology in entertainment. As a keen gamer I've always
          found myself not only enjoying the games I played, but also analyzing
          them critically. I love exploring what works and what could be
          improved within game mechanics, user interfaces, and overall gameplay.
          With my meticulous attention to detail, I envision myself contributing
          to the gaming industry by crafting immersive and engaging experiences
          that captivate players worldwide.
        </p>
        <p>
          My curiosity extends to artificial intelligence (AI) and its
          transformative potential. The realm of sports, for instance, has
          witnessed an evolution through AI-driven statistical analysis and data
          interpretation. This technology has revolutionized strategies and
          player performance, altering the very nature of sports competition.
          I'm intrigued by the prospect of diving deeper into AI's impact on the
          sports industry and delving into the intricate intersections of
          technology, data, and athleticism. This exploration is what fuels my
          desire to be at the forefront of these revolutionary shifts which are
          reshaping the sports landscape as we know it.
        </p>
        <p>
          Additionally, my fascination with blockchain technology drives me to
          envision a future where digital transformation becomes the norm. The
          shift away from physical currency to digital transactions is
          inevitable, and blockchain is poised to play a pivotal role in this
          transition. As a collector of sports NFTs (Non-Fungible Tokens), I'm
          excited about the emergence of blockchain in collectibles and its
          potential in securing digital ownership. Furthermore, I foresee
          blockchain disrupting conventional practices in legal documentation,
          offering a secure and transparent framework for critical contracts. My
          goal is to contribute to these innovative changes, helping shape a
          future where technology empowers individuals and industries in
          unprecedented ways.
        </p>
        <p>
          In a world where technology is continuously reshaping our experiences,
          I am driven to be a catalyst for transformation. My diverse
          background, coupled with my unwavering enthusiasm for emerging
          technologies, positions me to drive change, challenge norms, and
          create solutions that enhance how we live, play, and interact.
        </p>
      </div>
    </>
  );
};

export default About;
