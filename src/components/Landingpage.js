import React from 'react';
import Grow from '@mui/material/Grow';
import TungstenIcon from '@mui/icons-material/Tungsten';
import HandymanIcon from '@mui/icons-material/Handyman';

function Landingpage() {
    return (
        <div className='landing_page'>
            <Grow in={true}
                style={{ transformOrigin: '0 50 0' }}
                {...(true ? { timeout: 1000 } : {})}
            >
                <div className="first_section">
                    <div className="header">
                        <img className='udea' src="images/logosimbolo-horizontal-png.png" />
                        <h3>es</h3>
                        <h1 className="ecocreativo">ECOCREATIVA</h1>
                    </div>
                </div>
            </Grow>
            <hr />

            <div className="container proyect_description">
                <Grow in={true}
                    style={{ transformOrigin: '0 50 0' }}
                    {...(true ? { timeout: 2000 } : {})}
                >
                    <div>
                        <h1 className=""> <TungstenIcon/> ¿Quiénes somos? <TungstenIcon/> </h1>
                        <p className="index_text_ajust">Somos estudiantes de la carrera de Ingeniería Ambiental de la Universidad de Antioquia en Medellín Colombia. Estamos comprometidxs
                            con las revoluciones críticas que se plantean en los tiempos contemporáneos así como
                            la construcción de un país mas <a href="/educacion_ambiental" className="inst_credits">sustentable</a> y respetuoso con la Naturaleza.</p>
                    </div>
                </Grow>
                <Grow in={true}
                    style={{ transformOrigin: '0 50 0' }}
                    {...(true ? { timeout: 3000 } : {})}
                >
                    <div>
                        <h1 className=""> <HandymanIcon/> ¿En qué consistió el proyecto? <HandymanIcon/></h1>
                        <p className="index_text_ajust">
                            Se propiciaron espacios didácticos para la discusión de temas ambientales, se promovió <a href="/arte_ambiental" className="inst_credits">prácticas de reacondicioneamiento</a> , se fomentó la <a href="/participacion_ciudadana" className="inst_credits">participación ciudadana </a> y se exploraron  los conocimientos del estudiantado. Partiendo de estos descubrimientos, se buscó educar e ilustrar, respetando y valorando los
                            aspectos culturales de lxs participantes. Este proyecto fue diseñado para
                            promover no solo el cuidado de la Naturaleza, sino también el bienestar social,
                            integrando el arte y la creatividad en la solución de problemas ambientales y el fortalecimiento de la comunidad universitaria.
                        </p>
                    </div>
                </Grow>
            </div>


        <hr/>
        </div>
    )
}

export default Landingpage;