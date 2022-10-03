import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css'
import { motion } from 'framer-motion';
import pikachuSearch from '../../icons/pikachu-search.png';
import bulbasaur from '../../icons/bulbasaur.png';

const Start = () => {
    return (
        <div className='choiceCard'>
            <motion.div
                initial={{ x: 400, rotateZ: 15 }}
                animate={{ x: 0, rotateZ: 0 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgb(244, 74, 74)' }}
                exit={{ x: -600, y: 700, rotateZ: -15 }}
                className='searchByName'>
                <Link
                    to='/search'
                    className='linkCard'>
                    <h1>Search by name</h1>
                    <img className='getStartedImg' src={pikachuSearch} alt="" />
                </Link>
            </motion.div>
            <motion.div
                initial={{ x: 400, rotateZ: 15 }}
                animate={{ x: 0, rotateZ: 0 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgb(104, 238, 104)' }}
                exit={{ x: -300, y: 700, rotateZ: -15 }}
                className='all'>
                <Link
                    to='pokedex'
                    className='linkCard'>
                    <h1>All Pokemon</h1>
                    <img className='getStartedImg' src={bulbasaur} alt="" />
                </Link>
            </motion.div>
        </div>
    );
}

export default Start;
