import React from 'react';
import IoIosSearchStrong from 'react-icons/lib/io/ios-search-strong';

const SearchBox = () => {
  return (
    <form onSubmit={e => e.preventDefault()} className="nav-item search-item">
      <input type="search" placeholder="search"/>
      <button type="submit" className="search-btn"><IoIosSearchStrong /></button>
    </form>
  );
};

export default SearchBox;