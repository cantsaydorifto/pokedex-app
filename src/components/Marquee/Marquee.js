import React from 'react';
import './Marquee.css';
import firstPageData from '../Data/pokemon-links';
import { motion } from 'framer-motion';

const pokeVariant = {
    hover: {
        scale: 1.1,
        rotateZ: [0, 2, 0],
        transition: {
            duration: 0.2
        }
    }
}

const Marquee = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ x: - 150, opacity: 0, transition: { ease: 'easeInOut' } }}
            className='marqueeContainer'
        >
            <div className='marquee'>
                <div className='firstRow' >
                    {firstPageData.map((el, index) => <motion.img
                        variants={pokeVariant}
                        whileHover='hover'
                        key={index}
                        className='a'
                        src={el}
                        alt={'pokemon'} />)}
                </div >
                <div className='secondRow'>
                    {firstPageData.map((el, index) => <motion.img
                        variants={pokeVariant}
                        whileHover='hover'
                        key={index}
                        className='a'
                        src={el}
                        alt={'pokemon'} />)}
                </div>
            </div>
        </motion.div >
    );
}

export default Marquee;
