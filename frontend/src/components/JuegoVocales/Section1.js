import React, { useState } from 'react';
import vocalA from '../../assets/letters/vocalA.png';
import asign from '../../assets/letterssign/asign.png';
import vocalE from '../../assets/letters/vocalE.png';
import esign from '../../assets/letterssign/esign.png';
import vocalI from '../../assets/letters/vocalI.png'
import isign from '../../assets/letterssign/isign.png';
import ovocal from '../../assets/letters/ovocal.png';
import osign from '../../assets/letterssign/osign.png';
import vocalU from '../../assets/letters/vocalU.png';
import usign from '../../assets/letterssign/usign.png';
import right from '../../assets/right.png'
import uk from '../../assets/uk.png';
import spain from '../../assets/spain.png';
import "../../styles/App.css";

const Section1 = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    const switchVisible = () => {
        // Calculate the index of the next div to show
        const nextIndex = (visibleIndex + 1) % 5;
        setVisibleIndex(nextIndex);
    };


    return (
        <div className='section-container'>
         
            <div className='A-O' style={{ display: visibleIndex === 0 ? 'flex' : 'none' }}>
                <div className='vocals'> 
                    <img src={vocalA} alt='' id='vocalA' /> 
                </div>
                <div className='vocals'> 
                    <img src={asign} alt='' id='asign' /> 
                </div>
            </div>

            <div className='A-O' style={{ display: visibleIndex === 1 ? 'flex' : 'none' }}>
                <div className='vocals'> <img src={vocalE} alt='' id='vocalE' /> </div>
                <div className='vocals'> <img src={esign} alt='' id='esign' /> </div>
            </div>

            <div className='A-O' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
                <div className='vocals'> <img src={vocalI} alt='' id='vocalI' /> </div>
                <div className='vocals'> <img src={isign} alt='' id='isign' /></div>
            </div>

            <div className='A-O' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
                <div className='vocals'> <img src={ovocal} alt='' id='ovocal' /></div>
                <div className='vocals'> <img src={osign} alt='' id='osign' /></div>
            </div>

            <div className='A-O' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
                <div className='vocals'> <img src={vocalU} alt='' id='vocalU' /></div>
                <div className='vocals'> <img src={usign} alt='' id='usign' /></div>
            </div>

            <div className='A-O'>
                <input className='vocals' id="Button1" type="image" src={right} alt='' onClick={switchVisible} />
            </div>

            <div className='esengmain'>
                <div className='eng'> <button> <img src={uk} alt='' id='uk' /></button> </div>
                <div className='es'> <button> <img src={spain} alt='' id='spain' /></button></div>
            </div>

        </div>
    );
}

export default Section1;
