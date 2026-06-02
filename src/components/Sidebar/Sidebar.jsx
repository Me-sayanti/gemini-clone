import React, { useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const { prevChats, loadPreviousChat, clearChats } = useContext(Context);

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="" />

        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          <p>New Chat</p>
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>

          {prevChats.map((chat, index) => (
            <div
              className="recent-entry"
              key={index}
              onClick={() => loadPreviousChat(chat)}
            >
              <img src={assets.message_icon} alt="" />
              <p>
                {chat.prompt.length > 18
                  ? chat.prompt.slice(0, 18) + "..."
                  : chat.prompt}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom">
        <button className="clear-btn" onClick={clearChats}>
          Clear History
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
