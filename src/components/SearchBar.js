import React from 'react';


class SearchBar extends React.Component {
    render() {
        return (

        <div className="active-cyan-3 active-cyan-4 mb-4 text-center">

          <input type="text" className="input" placeholder="SearchComic..." aria-label="Search" />

          <button className="btn btn-primary">Search</button>
          
        </div>
        )
    }
}


export default SearchBar;
