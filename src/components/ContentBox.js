import React from 'react';

const ContentBox = ({ arrayOfEntries, labels }) => {
  if (arrayOfEntries.length < 1) {
    return (
      <div>
        Hi, placeholder text here. I'm holding place.
      </div>
    )
  } else {


    return (
      <div>
        {arrayOfEntries}
        {labels}
      </div>
    )
  }
}

export default ContentBox;