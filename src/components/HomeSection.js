import React from "react";
import { Link } from "react-router-dom";
const HomeSection = () => {
  return (
    <div>
      <Link to="/modal">
        <div className="goToModal">Modal</div>
      </Link>
    </div>
  );
};

export default HomeSection;
