import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Search.css';
import { motion } from 'framer-motion';

const Search = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 300, y: 0, rotateZ: 10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotateZ: 0 }}
            className='mainSearchCard'>
            <h1 className='searchBarHeading'>Search For Any Pokemon</h1>
            <SearchBar />
        </motion.div>
    );
}

export default Search;
