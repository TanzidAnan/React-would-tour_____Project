import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    // console.log(country)
    const {name,flags,area,population,cca3} =country;

    const [visited,setVisited] =useState(false);

    const hendleVisited =() =>{
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h5>Name:{name?.common} </h5>
            <div className='img-div'>
            <img src={flags.png} alt="" />
            </div>
            <p>area: {area}</p>
            <p>population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button className='btn' onClick={hendleVisited}>{visited?'Visited':'Going'}</button>
            {visited ? 'I Have a visited': 'I one to visite'}
        </div>
    );
};

export default Country;