import React from 'react';
import '../../views/HomePage/HomePage.css';

const Box = ({ title, content }) => {
  return (
    <div className="box">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Box;