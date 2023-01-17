import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchTerm);
    }

    return (
        <Paper className="search-bar" elevation={1}>
            <form onSubmit={handleSubmit}>
                <InputBase 
                    placeholder="Search for sessions"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />
                <IconButton className="search-icon" type="submit">
                    <SearchIcon />
                </IconButton>
            </form>
        </Paper>
    )
}

export default SearchBar;
