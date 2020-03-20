import React from 'react';
import './SearchBar.css';

interface Props {
    handleFilterTextChange: Function;
}

export const SearchBar = (props: Props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.handleFilterTextChange(e.target.value);
      };
    return (
        <div>
            <h3>Search:</h3>
            <input
                onChange={onChange}
            />
        </div>
    )
};
