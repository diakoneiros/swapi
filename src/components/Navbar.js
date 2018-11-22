import React from 'react';
import FlatButton from './FlatButton';

const Navbar = ({ options, onButtonClick }) => {
  return (
    <div>
      {
        options.map(
          (option, index) => {
            return (
              <FlatButton
                id={index}
                key={index}
                value={option}
                onClick={onButtonClick}
              />
            );
          }
        )
      }
    </div>
  )

}

export default Navbar;
