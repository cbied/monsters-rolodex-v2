import React, { ChangeEvent } from 'react';
import './search-box.styles.css';

interface ISearchBoxProp {
  className: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBoxProp) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={e => onChangeHandler(e)}
  />
);

export default SearchBox;
