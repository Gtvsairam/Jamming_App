import React from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Profile1 from "../pages/Profile1";
import Profile2 from "../pages/Profile2";
import Profile3 from "../pages/Profile3";
import Profile4 from "../pages/Profile4";
import "./header.css";

const Header = () => {
  const [profile, setProfile] = useState("4");

  return (
    <div>
      <div className="navbar-position">
        <div className="img1"></div>
        <div className="heading">Friday Night Jam</div>
        <select
          name="participants"
          className="dropdown-button"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button className="invite-button">invite</button>
      </div>
      <div className="homeSection-position">
        {profile === "1" ? (
          <Profile1 />
        ) : profile === "2" ? (
          <Profile2 />
        ) : profile === "3" ? (
          <Profile3 />
        ) : (
          profile === "4" && <Profile4 />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Header;
