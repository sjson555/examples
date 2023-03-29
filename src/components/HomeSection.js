import React from "react";
import { Link } from "react-router-dom";
import "../styles/homesection.css";

const HomeSection = () => {
  return (
    <div>
      <Link to="/modal" className="modalLink">
        <div className="goToModal">Modal</div>
      </Link>
    </div>
  );
};

export default HomeSection;
