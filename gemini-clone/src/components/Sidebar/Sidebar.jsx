// components/Sidebar/Sidebar.js
import React, { useContext, useState } from 'react';
import './Sidebar.css';
import menuIcon from '../../assets/menu_icon.png';
import plusIcon from '../../assets/plus_icon.png';
import messageIcon from '../../assets/message_icon.png';
import questionIcon from '../../assets/question_icon.png';
import historyIcon from '../../assets/history_icon.png';
import settingIcon from '../../assets/setting_icon.png';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSend, prevPrompts, setRecentPrompt,newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSend(prompt);
  }

  return (
    <div className='sidebar'>
      <div className="top">
        <img
          className='menu'
          onClick={() => setExtended((prev) => !prev)}
          src={menuIcon}
          alt="Menu Icon"
        />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={plusIcon} alt="Plus Icon" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                <img src={messageIcon} alt="Message Icon" />
                <p>{item.slice(0, 18)}.....</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item">
          <img className='icon' src={questionIcon} alt="Question Icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item">
          <img className='icon' src={historyIcon} alt="History Icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item">
          <img className='icon' src={settingIcon} alt="Setting Icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
