import * as React from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { search, my } from './style.module.scss';

const Search = ({data, updateStar}) => {
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // console.log(string, results)
    }
    
    const handleOnHover = (result) => {
        // the item hovered
        // console.log(result)
    }
    
    const handleOnSelect = (item) => {
        // the item selected
        updateStar(item)
    }
    
    const handleOnFocus = () => {
        // console.log('Focused')
    }
    
    // const formatResult = (item) => {
    //   return (
    //     <>
    //       <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
    //       <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
    //     </>
    //   )
    // }
    
    const fuseOptions = {
      minMatchCharLength: 2,
    }

    const styling = {
        height: "40px",
        borderRadius: "5px",
    }

    return(
        <div className={search}>
            <ReactSearchAutocomplete
              items={data}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
            //   formatResult={formatResult}
              fuseOptions={fuseOptions}
              styling={styling}
              placeholder={"Search for a star"}
            />
        </div>
    )
}

export default Search;