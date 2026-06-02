import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import ReactMarkdown from "react-markdown";

const Main = () => {
  const {
    input,
    setInput,
    recentPrompt,
    resultData,
    loading,
    showResult,
    onSent,
  } = useContext(Context);

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini Clone</p>
          <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Dev</span>
                </p>
                <p>How can I help you today?</p>
              </div>

              <div className="cards">
                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>

              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />

                {loading ? (
                  <p className="loading-text">Loading...</p>
                ) : (
                  <div className="gemini-response">
                    <ReactMarkdown>{resultData}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                placeholder="Enter a prompt here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSent();
                  }
                }}
              />

              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />

                <img
                  src={assets.send_icon}
                  alt=""
                  onClick={() => onSent()}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            <p className="bottom-info">
              Gemini may display inaccurate info, so double-check its responses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
