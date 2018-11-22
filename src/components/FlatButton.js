import React from 'react';

const FlatButton = ({ id, value, state, onClick }) => {
  return (
    <button
      className="bg-near-white"
      onClick={onClick}
      id={id}
    >
      {value}
    </button>
  )
}

export default FlatButton;