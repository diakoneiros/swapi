import React from 'react';

const ContentBox = ({ category, searchTerm }) => {
  let placeholder;
  const filter = searchTerm;
  const link = `https://swapi.co/api/${category}`;

  const getData = async function () {
    const response = await fetch(link);
    console.log('getData response', response);
    const keys = response.json()["results"];
    console.log("keys", keys)
    return keys;

  }

  if (category === 'placeholder') {
    return (
      <div>
        Hi, placeholder text here. I'm holding place.
      </div>
    )
  } else {

    placeholder = getData();

    return (
      <div>
        {console.log("placeholder", placeholder)};
      </div>
    )
  }
}

export default ContentBox;