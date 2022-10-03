import { motion } from 'framer-motion';
import React from 'react';
import './Loading.css';
import pokeball from '../../icons/pokeball.png';

const pokeballLoaderVariants = {
    animate: {
        y: [0, -50, 0],
        // rotateZ: 180,
        rotateZ: [0, 360],
        transition: {
            repeat: Infinity,
            duration: 0.8
        }
    }
}

const Loading = () => {
    return (
        <div className='loading-page'>
            <div className='loading-container'>
                <motion.img
                    variants={pokeballLoaderVariants}
                    animate='animate'
                    className='loading-pokeball'
                    src={pokeball}
                    alt="loading" />
            </div>
        </div>
    );
}

export default Loading;
