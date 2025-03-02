import React, { useEffect, useState } from 'react';
import galeria from './data/arte_ambiental_data.js';
import Zoom from '@mui/material/Zoom'
import Grow from '@mui/material/Grow';



function ArteAmbiental() {

    const [visibleIndex, setVisibleIndex] = useState(0)

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const galeriaItems = document.querySelectorAll(".galeria_coleccion");

        galeria.forEach((item, index) => {
            const itemTop = item.offsetTop;
            if (scrollPosition > itemTop) {
                setVisibleIndex(index)
            }
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className='container'>
            <h1 className="art_tittle">ARTE AMBIENTAL</h1>
            <p className="arte_invitacion">Explora nuestra selección, una colección de 12 ideas en las que podemos aportar a la <a className="inst_credits" href="/educacion_ambiental">bioeconomia.</a></p>
            <img className="deco_arte_ambiental" src="/images/giphy.gif" alt=""></img>
            <hr />

            <div className='container '>
                <div className='row justify-content-center'>
                    {galeria.map((item, index) => {
                        return (
                            <Zoom in={true}
                                style={{ transformOrigin: '0 50 0' }}
                                {...(true ? { timeout: 550 * (index+1) } : {})}
                            >
                                <div classNameName='card galeria_coleccion' style={{ width: '18rem' }} >
                                    <img src={item.image} className="card-img-top" alt="..." />
                                    <a href={item.YTlink} className="btn btn-light" target="_blank" rel='noopener noreferrer'>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <i className="fa-brands fa-youtube"></i>
                                        </div></a>

                                </div>
                            </Zoom>

                        )
                    })
                    }
                </div>
            </div>

            <hr />

        </div>
    )
}

export default ArteAmbiental;