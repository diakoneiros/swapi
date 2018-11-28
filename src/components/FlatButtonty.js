import React from 'react';
import NavItem from 'react-bootstrap/lib/NavItem'
const FlatButton = ({ id, value, state, onClick }) => {
  return (
    <NavItem
      onClick={onClick}
      id={id}
    >
      {value}
    </NavItem >
    /* { <button
       className="bg-near-white"
       onClick={onClick}
       id={id}
     >
       {value}
     </button> } */
  )
}

export default FlatButton;