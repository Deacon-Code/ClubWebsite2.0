import React from "react";
import { SiGroupme } from "react-icons/si";
import "./ContactPageStyles.css";
import useRedirectOnClick from "./Hooks/useRedirectOnClick";

const ContactPage = () => {
  const handleGroupmeClick = useRedirectOnClick(
    "https://groupme.com/join_group/102163335/5l7p6DwY"
  );
  return (
    <div className="contactContainer">
      <h1>Join Our GroupMe!</h1>
      <div className="groupmeLink" onClick={handleGroupmeClick}>
        <SiGroupme size={200} style={{ color: "rgb(32, 108, 248)" }} />
      </div>
      <div className="email">
        <h1> Club President Email</h1>
        <p>passta23@wfu.edu</p>
      </div>
    </div>
  );
};

export default ContactPage;
