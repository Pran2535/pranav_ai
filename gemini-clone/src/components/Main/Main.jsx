import React, { useContext } from 'react';
import './Main.css';
import userIcon from '../../assets/user_icon.png';
import compassIcon from '../../assets/compass_icon.png';
import bulbIcon from '../../assets/bulb_icon.png';
import messageIcon from '../../assets/message_icon.png';
import codeIcon from '../../assets/code_icon.png';
import galleryIcon from '../../assets/gallery_icon.png';
import micIcon from '../../assets/mic_icon.png';
import sendIcon from '../../assets/send_icon.png';
import geminiIcon from '../../assets/gemini_icon.png';

// Import your context here once it's defined
import { Context } from '../../context/Context'; // Adjust the path as per your project structure

const Main = () => {
  const {
    onSend,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (prompt) => {
    setInput(prompt);
    onSend(prompt);
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>Pranav AI</p>
        <img src={userIcon} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, welcome to Pranav AI</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick("Suggest some beautiful places to visit in Chandigarh")}>
                <p>Suggest some beautiful places to visit in Chandigarh</p>
                <img src={compassIcon} alt="Compass Icon" />
              </div>
              <div className="card" onClick={() => handleCardClick("Placement statistics of UIET Chandigarh")}>
                <p>Placement statistics of UIET Chandigarh</p>
                <img src={bulbIcon} alt="Bulb Icon" />
              </div>
              <div className="card" onClick={() => handleCardClick("Panjab University Chandigarh beauty")}>
                <p>Panjab University Chandigarh beauty</p>
                <img src={messageIcon} alt="Message Icon" />
              </div>
              <div className="card" onClick={() => handleCardClick("Extension of UIET Chandigarh")}>
                <p>Extension of UIET Chandigarh</p>
                <img src={codeIcon} alt="Code Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            <div className="result-title">
              <img src={userIcon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={geminiIcon} alt="Gemini Icon" />
              {loading ? (
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="search-icons">
              <img src={galleryIcon} alt="Gallery Icon" />
              <img src={micIcon} alt="Mic Icon" />
              {input ? (
                <img onClick={() => onSend(input)} src={sendIcon} alt="Send Icon" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Pranav AI may display inaccurate info, including about people, so
            double-check it
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
