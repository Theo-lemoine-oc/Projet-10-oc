import React from "react";

const Tags = ({ getTag }) => {
  return (
    <div className="tag">
      <span className="tag-text">{getTag}</span>
    </div>
  );
};

export default Tags;