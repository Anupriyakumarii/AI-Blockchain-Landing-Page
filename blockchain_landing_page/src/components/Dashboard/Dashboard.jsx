import React from "react";
import "../Dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <main className="content">
        <h1>
          <span className="highlight">A Fast Blockchain.</span>
          <br />
          Scalable AI.
        </h1>
        <p className="description">
          Our technology performing fast blockchain (120K TPS) and it has
          guaranteed
          <br />
          AI-based data security. Proof of Stake, its consensus algorithm
          enables
          <br />
          unlimited speeds.
        </p>
        <div className="buttons">
          <button className="btn primary">Get started</button>
          <button className="btn">Ecosystems</button>
        </div>

        <div className="illustration">
          {/* Replace with real SVG or animated image in a real project */}
          <img
            src="/images/Ai_image.png"
            alt="AI bots"
            // width="1500"
            // height="300"
          />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
