import React from 'react';

const ContentCard = ({ index, keys, values }) => {
  return (
    <div key={index} id={index} className="contentCard">
      {values.map(value => <div>{value}</div>)}
    </div>
  )
}

export default ContentCard