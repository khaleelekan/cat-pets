import React from "react"
import './Searchfield.css'

const SearchField= (props) => {
    return (
        <div className="search">
            <input type="search" placeholder="find your cat" onChange={props.onChange}/>
        </div>
    )
}
export default SearchField;