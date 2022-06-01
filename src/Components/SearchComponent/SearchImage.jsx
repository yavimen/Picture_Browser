import React from "react";
import './SearchImage.css'
const SearchImage = ({searchLine, setSearchLine}) => {
    function test(line) {
        console.log(searchLine);
    }
    return (
        <div className="search-image-container">
           <input type='text' className="searchline" onChange={e=>setSearchLine(e.target.value)}></input>
           <button className="btn btn-lg btn-dark" onClick={test}>Search</button>
        </div>
    );
}

export default SearchImage;