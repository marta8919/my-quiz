import React from "react";

export const Hero = () => {
  return (
    <div className="heroWrapper">
      <div></div>
      <div className="hero">
        <h2>Welcome to code quizzer!</h2>
        <h3>
          Here you will be able to get ready for your Frontend Developer
          interview.
        </h3>
        <h3>How do you want to pratice today?</h3>
        <button>quiz</button>
        <button>flash cards</button>
      </div>
    </div>
  );
};
