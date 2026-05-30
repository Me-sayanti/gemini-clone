import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini Clone</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p>
              <span>Hello, Dev</span>
            </p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>
                loreLorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>
                loreLorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>
                loreLorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>
                loreLorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
