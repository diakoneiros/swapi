import React from 'react';
import ContentCard from './ContentCard';
import Container from 'react-bootstrap/lib/Container';

const ContentBox = ({ entry, arrayOfEntries, labels }) => {
  if (entry === 'main') {
    return (
      <div>
        Hi! How are you?
      </div>
    )
  } else {

    if (arrayOfEntries.length === 0 && labels.length > 0) {
      return (
        <div>
          Sorry, it seems there are no search results matching your query.
        </div>
      )
    }

    return (
      <Container id="ContentBox" className="flex-wrap align-between">
        {arrayOfEntries.map((entry, index) => <ContentCard
          key={index}
          values={entry}
          keys={labels}
          index={index}
        />)}
      </Container>
    )
  }
}

export default ContentBox;