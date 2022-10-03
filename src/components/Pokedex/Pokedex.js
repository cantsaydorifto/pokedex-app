import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Pokedex.css';
import Loading from '../Loading/Loading';

const Pokedex = () => {
    const [curData, setCurData] = useState([]);
    const [curUrl, setCurUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [loading, setLoading] = useState(true);
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();

    const pokeCardVariant = {
        hover: {
            scale: 1.1,
            rotateZ: [0, -1, 0],
            transition: {
                duration: 0.2
            }
        },
        initial: {
            x: 300,
            y: -300,
            rotateZ: 15,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            rotateZ: 0,
            opacity: 1,
        },
        exit: {
            opacity: 0,
            rotateZ: -15,
            y: 550,
        }
    }

    useEffect(() => {
        setLoading(true);
        axios.get(curUrl).then(res => {
            setNextPageUrl(res.data.next);
            setPrevPageUrl(res.data.previous);
        })
        fetch(curUrl)
            .then(res => res.json())
            .then(res => {
                return Promise.all(res.results.map(el => {
                    return fetch(el.url).then(res => res.json());
                }));
            }).then(res => {
                setLoading(false);
                setCurData([]);
                res.forEach(el => {
                    setCurData(prev => [...prev, el]);
                });
            });
    }, [curUrl]);
    if (loading) return <Loading />
    return (
        <motion.div
            variants={pokeCardVariant}
            initial='initial'
            animate='animate'
            exit='exit'

        >
            <h1 className='pokedexHeading'>Pokedex</h1>
            <div className='prev-next-buttons'>
                {prevPageUrl &&
                    <div
                        className='page-button'
                        onClick={() => setCurUrl(prevPageUrl)}>Previous
                    </div>}
                {nextPageUrl &&
                    <div
                        className='page-button'
                        onClick={() => setCurUrl(nextPageUrl)}>Next
                    </div>}
            </div>
            <div className='mainPokedexCard'>
                {curData.map((el, idx) =>
                    <motion.div
                        variants={pokeCardVariant}
                        whileHover='hover'
                    >
                        <Link to={`/pokedex/${el.id}`} key={idx} className={`pokemonCard ${el.types[0].type.name}CardColor`}>
                            <div className='pokeId'>#{el.id}</div>
                            {Math.floor(Math.log10(el.id)) === 0 && <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${el.id}.png`} alt='' />}
                            {Math.floor(Math.log10(el.id)) === 1 && <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${el.id}.png`} alt='' />}
                            {Math.floor(Math.log10(el.id)) === 2 && <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${el.id}.png`} alt='' />}
                            <h2>{el.name[0].toUpperCase() + el.name.slice(1)}</h2>
                            <div className='typeRow'>
                                {el.types.map(el =>
                                    <div
                                        key={Math.random()} className={'type ' + el.type.name}>
                                        {el.type.name[0].toUpperCase() + el.type.name.slice(1)}
                                    </div>)}
                            </div>
                        </Link>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

export default Pokedex;