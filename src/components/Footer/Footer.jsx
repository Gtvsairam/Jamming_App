import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="leftFooter">
        <div className="cellContainer">
          <div
            className="cell"
            style={{
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          >
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div className="cell">
            <span className="cellSpan">0004</span>Bar
          </div>
          <div className="cell">
            <span className="cellSpan">1</span>Beat
          </div>
          <div className="cell">
            <span className="cellSpan">- 120 +</span>Tempo
          </div>
          <div
            className="cell"
            style={{
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            <span className="cellSpan">4/4</span>Cmaj
          </div>
        </div>
        <div className="record">
          <div className="circle"></div>
        </div>
      </div>

      <div className="rightFooter">
        <div className="bans btn">End Jam</div>
        <div className="bans">
          <i class="fa-solid fa-microphone"></i>
        </div>
        <div className="bans">
          <i class="fa-sharp fa-solid fa-volume-high"></i>
        </div>
        <div className="bans">
          <i class="fa-solid fa-video"></i>
        </div>
        <div className="bans">
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
