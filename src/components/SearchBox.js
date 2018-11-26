import React from 'react';

const SearchBox = ({
  searchchange,
  activeTab
}) => {
  return (<div className="searchBar" >
    <
      input type='search'
      placeholder={
        `search ${activeTab}`
      }
      onChange={
        searchchange
      }
    /> </div >
  )
}

export default SearchBox;