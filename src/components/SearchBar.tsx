import React from 'react';
import './SearchBar.css';

interface Props {
    handleFilterTextChange: Function;
    handleSearchModeChange: Function;
    keyword: string;
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = (props: Props) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setKeyword(e.target.value);
        props.handleFilterTextChange();
    };
    const onClick = (e: React.MouseEvent) => {
        props.handleSearchModeChange();
    };

    return (
        <div>
            <h3>Search:</h3>
            <input
                value={props.keyword}
                onChange={onChange}
            />
            <button onClick={onClick}>
                Change Search Mode
            </button>
        </div>
    )
};
