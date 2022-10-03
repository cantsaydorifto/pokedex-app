import React, { useState } from 'react';
import allPoke from '../Data/allPokemon';
import './SearchBar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [filterData, setFilterData] = useState([]);
    const [inputData, setInputData] = useState('');

    const changeHandler = (event) => {
        setInputData(event.target.value);
        let searchQuery = event.target.value;
        const pokeData = allPoke.map((el, idx) => {
            return {
                name: el.toLowerCase(),
                id: idx + 1
            }
        }
        );
        const arr = pokeData.filter((el) => {
            return el.name.includes(searchQuery);
        });
        setFilterData(arr);
    }

    return (
        <div
            className="searchBar">
            <input className='search-bar' type="text" onChange={changeHandler} />
            {inputData && filterData.length !== 0 &&
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    className="searchResult">
                    {filterData.slice(0, 5).map((el, idx) => {
                        return (
                            <Link to={`/pokedex/${el.id}`} className='searchPokemon'>
                                {Math.floor(Math.log10(el.id)) === 0 && <img className='search-bar-img' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${el.id}.png`} alt='' />}
                                {Math.floor(Math.log10(el.id)) === 1 && <img className='search-bar-img' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${el.id}.png`} alt='' />}
                                {Math.floor(Math.log10(el.id)) === 2 && <img className='search-bar-img' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${el.id}.png`} alt='' />}
                                <p className='search-text'>
                                    #{('00' + el.id.toString()).slice(-3)} {el.name[0].toUpperCase() + el.name.slice(1)}
                                </p>
                            </Link>
                        );
                    })}
                </motion.div>}
        </div >
    );
}

export default SearchBar;
