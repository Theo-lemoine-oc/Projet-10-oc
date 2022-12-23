import React from "react";
import './locationPage.css';

const Tags = ({ getTag }) => {
  return (
    <div className="tag">
      <span>{getTag}</span>
    </div>
  );
};

export default Tags;