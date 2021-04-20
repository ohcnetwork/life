import React from 'react';

const Selector = ({ data }) => {
  return (
    <select>
      {data.map((dt) => {
        <option value={dt}>{dt}</option>;
      })}
    </select>
  );
};

export default Selector;
