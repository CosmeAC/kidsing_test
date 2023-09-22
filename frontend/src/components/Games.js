import Section1 from './Section1';
import SectionAE from './SectionAE';
import SectionFJ from './SectionFJ';
import SectionKO from './SectionKO';
import SectionPT from './SectionPT';
import SectionUZ from './SectionUZ';
import Sectionnumbers from './JuegoNumManoVideo/Sectionnumbers';
import Login from './Login';

const Games = () => {
    return (
        <div className="Games">
            <Login/>
            <Section1 />
            <SectionAE />
            <SectionFJ />
            <SectionKO />
            <SectionPT />
            <SectionUZ />
            <Sectionnumbers />
        </div>
    )
}

export default Games