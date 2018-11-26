import React from 'react';
import ContentCard from './ContentCard'

const ContentBox = ({ arrayOfEntries, labels }) => {
  if (arrayOfEntries.length < 1) {
    return (
      <div>
        Hi, placeholder text here. I'm holding place.
      </div>
    )
  } else {


    return (
      <div id="ContentBox">
        {arrayOfEntries.map((entry, index) => <ContentCard
          key={index}
          values={entry}
          keys={labels}
          index={index}
        />)}
      </div>
    )
  }
}

export default ContentBox;