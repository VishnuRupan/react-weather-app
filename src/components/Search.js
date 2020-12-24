import React, {useRef} from 'react'

function Search({setSearchLocation}) {
    const inputEl = useRef(null);

    const searchLocation = () =>{ 
        setSearchLocation(inputEl.current.value)
    }

    return (
        <div className="search-container">

            <input ref={inputEl} className="input-field" type="text" placeholder="Enter a location"/>

            <button onClick={searchLocation} className="search-btn">Search</button>
        </div>
    )
}

export default Search
