import React, { useState } from 'react';
import K from '../assets/letters/K.png';
import ksign from '../assets/letterssign/ksign.png';
import L from '../assets/letters/L.png';
import lsign from '../assets/letterssign/lsign.png';
import M from '../assets/letters/M.png';
import msign from '../assets/letterssign/msign.png';
import N from '../assets/letters/N.png';
import nsign from '../assets/letterssign/nsign.png';
import O from '../assets/letters/O.png';
import osign from '../assets/letterssign/osign.png';
import uk from '../assets/uk.png';
import spain from '../assets/spain.png';
import "../styles/App.css";


const SectionKO = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    const switchVisible = () => {
        // Calculate the index of the next div to show
        const nextIndex = (visibleIndex + 1) % 5;
        setVisibleIndex(nextIndex) 
    };

        return (
            <div className='section-container'>
                <div className='esengmain'>
                    <div className='eng'> <button> <img src={uk} alt='' id='uk' /></button> </div>
                    <div className='es'> <button> <img src={spain} alt='' id='spain' /></button></div>
                </div>
                <div className='A-Z' style={{ display: visibleIndex === 0 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={K} alt='' id='K' /></div>
                    <div className='vocals'><img src={ksign} alt='' id='ksign' /></div>
                </div>
                
                <div className='A-Z' style={{ display: visibleIndex === 1 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={L} alt='' id='L' /></div>
                    <div className='vocals'><img src={lsign} alt='' id='lsign' /></div>
                </div>
                <div className='A-Z' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
                    <div className='vocals'> <img src={M} alt='' id='M' /></div>
                    <div className='vocals'><img src={msign} alt='' id='msign' /></div>
                </div>
                <div className='A-Z' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={N} alt='' id='N' /></div>
                    <div className='vocals'><img src={nsign} alt='' id='nsign' /></div>
                </div>
                <div className='A-Z' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
                    <div className='vocals'><img src={O} alt='' id='O' /></div>
                    <div className='vocals'><img src={osign} alt='' id='osign' /></div>
                </div>
                <input id="Button1" type="button" value="Click me" onClick={switchVisible} />
            </div>
        )
    }

export default SectionKO;
