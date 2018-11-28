import React from 'react';
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'

const SearchBox = ({
  searchchange,
  activeTab
}) => {
  const ph = activeTab;
  return (
    <Form className="mr-auto" inline>
      <FormControl type="text"
        placeholder={ph}
        className="mr-sm-2"
        onChange={searchchange}
      />
    </Form>
    // <div className="searchBar" >
    //   <
    //     input type='search'
    //     placeholder={
    //       `search ${activeTab}`
    //     }
    //     onChange={
    //       searchchange
    //     }
    //   /> </div >
  )
}

export default SearchBox;