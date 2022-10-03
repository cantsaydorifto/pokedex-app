import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PokemonInfo.css';
import arrow from '../../icons/right-arrow.png';
import Loading from '../Loading/Loading';

const PokemonInfo = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [curPokemon, setCurPokemon] = useState({});
    const [pokeText, setPokeText] = useState(null);
    const urlId = ('00' + id).slice(-3);
    const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${urlId}.png`;

    useEffect(() => {
        setLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
            setCurPokemon(res.data);
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res => {
                const str = res.data.flavor_text_entries.find(el =>
                    el.language.name === 'en'
                );
                setPokeText(str);
                setLoading(false);
            });
        });
    }, [id]);
    if (loading) return <Loading />
    return (
        <div className='infoPage'>
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className={`infoCard ${curPokemon.types[0].type.name}CardColor`}>
                {Number(id) < 905 && <Link to={`/pokedex/${Number(id) + 1}`}>
                    <motion.img
                        src={arrow}
                        whileHover={{ scale: 1.1 }}
                        alt="right-arrow"
                        className='arrow-next' />
                </Link>}
                {Number(id) > 1 && <Link to={`/pokedex/${Number(id) - 1}`}>
                    <motion.img
                        initial={{ rotateY: 180 }}
                        whileHover={{ scale: 1.1 }}
                        src={arrow}
                        alt="left-arrow"
                        className='arrow-prev' />
                </Link>}
                <div className="pokemonAndId">
                    <p className='pokemonId'>#{urlId}</p>
                    <p className='pokemon-name'>
                        {curPokemon.name[0].toUpperCase() + curPokemon.name.slice(1)}
                    </p>
                    <img src={`${imgUrl}`} alt=""/>
                    <div className='type-row'>
                        {curPokemon.types.map(el =>
                            <div
                                key={Math.random()}
                                className={'type ' + el.type.name}>
                                {el.type.name[0].toUpperCase() + el.type.name.slice(1)}
                            </div>)}
                    </div>
                </div>
                <div className='row2'>
                    {<div><h3 className='headinLine'>Bio: </h3>{pokeText.flavor_text.replaceAll('\f', ' ')}</div>}
                    <div><h3 className='headinLine'>Abilities: </h3> {curPokemon.abilities.map((el, idx) => <span key={Math.random()}>{(idx ? ', ' : '') + el.ability.name[0].toUpperCase() + el.ability.name.slice(1)}</span>)}</div>
                    <div className="statsCard"><h3>Stats</h3>
                        <div className='stats'><h3 className='headinLine'>Height: </h3><p>{curPokemon.height / 10}m</p></div>
                        <div className='stats'><h3 className='headinLine'>Weight: </h3><p>{curPokemon.weight / 10}kg</p></div>
                        <div className='stats'><h3 className='headinLine'>Hp: </h3><p>{curPokemon.stats[0].base_stat}</p></div>
                        <div className='stats'><h3 className='headinLine'>Attack: </h3><p>{curPokemon.stats[1].base_stat}</p></div>
                        <div className='stats'><h3 className='headinLine'>Defence: </h3><p>{curPokemon.stats[2].base_stat}</p></div>
                        <div className='stats'><h3 className='headinLine'>Spl-Attack: </h3><p>{curPokemon.stats[3].base_stat}</p></div>
                        <div className='stats'><h3 className='headinLine'>Spl-Defense: </h3><p>{curPokemon.stats[4].base_stat}</p></div>
                        <div className='stats'><h3 className='headinLine'>Speed: </h3><p>{curPokemon.stats[5].base_stat}</p></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default PokemonInfo;