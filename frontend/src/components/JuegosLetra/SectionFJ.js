import React, {useState} from 'react';
import F from '../../assets/letters/F.png';
import fsign from '../../assets/letterssign/fsign.png';
import G from '../../assets/letters/G.png';
import gsign from '../../assets/letterssign/gsign.png';
import H from '../../assets/letters/H.png';
import hsign from '../../assets/letterssign/hsign.png';
import I from '../../assets/letters/I.png';
import isign from '../../assets/letterssign/isign.png';
import J from '../../assets/letters/J.png';
import jsign from '../../assets/letterssign/jsign.png';
import uk from '../../assets/uk.png';
import spain from '../../assets/spain.png';
import "../../styles/App.css";

const SectionFJ = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    const switchVisible = () => {
            // Calculate the index of the next div to show
    const nextIndex = (visibleIndex + 1) % 5;
    setVisibleIndex(nextIndex);
  };

    return (
        <div className='section-container'>
            <div className='esengmain'>
                <div className='eng'> <button> <img src={uk} alt='' id='uk' /></button> </div>
                <div className='es'> <button> <img src={spain} alt='' id='spain' /></button></div>
            </div>
            <div className='A-Z' style={{ display: visibleIndex === 0 ? 'flex' : 'none' }}>
                <div className='vocals'><img src={F} alt='' id='F' /></div>
                <div className='vocals'><img src={fsign} alt='' id='fsign' /></div>
            </div>
            
            <div className='A-Z' style={{ display: visibleIndex === 1 ? 'flex' : 'none' }}>
                <div className='vocals'><img src={G} alt='' id='G' /></div>
                <div className='vocals'><img src={gsign} alt='' id='gsign' /></div>
            </div>
            <div className='A-Z' style={{ display: visibleIndex === 2 ? 'flex' : 'none' }}>
                <div className='vocals'> <img src={H} alt='' id='h' /><div></div>
                <div className='vocals'><img src={hsign} alt='' id='hsign' /></div>
            </div>
            <div className='A-Z' style={{ display: visibleIndex === 3 ? 'flex' : 'none' }}>
                <div className='vocals'> <img src={I} alt='' id='I' /></div>
                <div className='vocals'><img src={isign} alt='' id='isign' /></div>
            </div>
            <div className='A-Z' style={{ display: visibleIndex === 4 ? 'flex' : 'none' }}>
                <div className='vocals'><img src={J} alt='' id='J' /></div>
                <div className='vocals'></div><img src={jsign} alt='' id='jsign' /></div>
            </div>
            <input id="Button1" type="button" value="Click me" onClick={switchVisible} />
        </div>
    )
}

export default SectionFJ;
