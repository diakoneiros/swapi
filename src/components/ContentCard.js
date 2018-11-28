import React from 'react';
import Card from 'react-bootstrap/lib/Card';
import './ContentCard.css';

const ContentCard = ({ index, keys, values }) => {
  return (
    <Card key={index} id={index} sm={2}>
      <Card.Body>
        <Card.Title> {values[0]}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {`${keys[1]}: ${values[1]}`}
        </Card.Subtitle>
        <Card.Text as="div">
          <ul className="main">
            {
              values.slice(2, values.length - 3).map((value, i) =>
                Array.isArray(value) ?
                  <ul key={i}>
                    {value.map((item, index) =>
                      <li key={`sublink ${i}, ${index}`}>{item}</li>)}
                  </ul>
                  :
                  <li key={`${values[0]} ${keys[i + 2]}`}>
                    {` ${keys[i + 2]}: ${value}`}
                  </li>
              )
            }
          </ul>
        </Card.Text>
      </Card.Body>
    </Card >
  )
}

export default ContentCard