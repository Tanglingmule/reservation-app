import React from 'react';

const createButtons = (data) => {
  return data.map((item, index) => (
    <button key={index}>{item.entryName}</button>
  ));
};

export default createButtons;
