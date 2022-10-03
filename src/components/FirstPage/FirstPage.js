import React from 'react';
import './FirstPage.css';
import rightArrow from '../../icons/right-arrow.png';
import Marquee from '../Marquee/Marquee';
import { motion } from 'framer-motion';
import pokeball from '../../icons/pokeball.png';
import { Link } from 'react-router-dom';

const buttonVariant = {
    hover: {
        scale: 1.1,
        rotateZ: 360,
        backgroundColor: 'lightGreen',
        transition: {
            duration: 0.3,
        }
    }
}

const containerVariant = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        x: -150,
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}

const FirstPage = () => {
    return (
        <div
            className='first-page-main'
        >
            <motion.h1
                variants={containerVariant}
                initial='initial'
                animate='animate'
                className="mainHeading"
                exit='exit'
            >
                Pokedex
            </motion.h1>
            <motion.img
                variants={containerVariant}
                initial='initial'
                animate='animate'
                className='heading-pikachu'
                exit='exit'
                src='https://media.tenor.com/8CRuK01WKcMAAAAi/pokemon-pikachu.gif'
                alt="pikachu" />
            <motion.img
                variants={containerVariant}
                initial='initial'
                animate='animate'
                exit='exit'
                className='heading-pokeball'
                whileHover={{ rotateZ: 180 }}
                src={pokeball}
                alt="pokeball" />
            <Marquee />
            <motion.div
                variants={containerVariant}
                initial='initial'
                animate='animate'
                exit='exit'
                className='start-here'>
                Start
                <motion.div
                    whileHover='hover'
                    variants={buttonVariant}
                    className='right-arrow'>
                    <Link to='/start'>
                        <img
                            className='right-arrow-img'
                            src={rightArrow}
                            alt="right arrow" />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default FirstPage;
