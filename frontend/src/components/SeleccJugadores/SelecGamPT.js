import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import '../../styles/bodyGame.css'


const SelecGamNum = () => {
    const [t, i18n] = useTranslation("games"); //traduccion
  return (
    <div className='bodyGame'>
        <Link to={'/Cam_PT'}>
            <button className='btnSeleccionCam'>{t("Games.1Jugador")}</button>
        </Link>
        <Link to={'/Cam_PT_2J'}>
            <button className='btnSeleccionCam'>{t("Games.2Jugador")}</button>
        </Link>
        
    </div>
  )
}

export default SelecGamNum 
