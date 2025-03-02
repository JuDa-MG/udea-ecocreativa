import React from 'react';
import Grow from '@mui/material/Grow';


export default function Taller() {
    return (
        <div className='container conceptos_section'>
            <Grow in={true}
                style={{ transformOrigin: '0 50 0' }}
                {...(true ? { timeout: 550  } : {})}>
                    
                <div className='fases'>
                <h2 className='concepto'>Introducción</h2>
                    <p>
                    El 28 de mayo de 2024 se realizó la integración académica de los estudiantes de la asignatura Sociedad y Ambiente, un espacio en el que se llevó a cabo un simposio centrado en el análisis y la discusión de la legislación colombiana. Este evento permitió a los participantes profundizar en temas relevantes relacionados con las normativas ambientales y su impacto en la sociedad, fomentando un diálogo enriquecedor y reflexivo.
                    </p>
                </div>
            </Grow>
            <Grow in={true}
                style={{ transformOrigin: '0 50 0' }}
                {...(true ? { timeout: 1000  } : {})}>
                    
                <div className='fases_section'>
                <h3 className='concepto'>Fase 1</h3>
                    <p>
                    Los estudiantes fueron partícipes de una integración en la que, mediante herramientas didácticas como lluvias de ideas y dibujos conceptuales, compartieron sus interpretaciones sobre problemas complejos, fomentando un ambiente de curiosidad y colaboración.
                    </p>
                </div>
            </Grow>
            <div className=''>
                <h3 className='concepto'>Fase 2</h3>
                    <p>
                    Los estudiantes fueron partícipes de una integración en la que, a través de herramientas didácticas como estudios de caso y análisis de datos, profundizaron en sus interpretaciones de problemas complejos, desarrollando habilidades críticas y reflexivas.
                    </p>
            </div>
            <div className=''>
                <h3 className='concepto'>Fase 3</h3>
                    <p>
                    Los estudiantes fueron partícipes de una integración en la que, utilizando herramientas didácticas como debates guiados y foros de discusión, compartieron y contrastaron sus interpretaciones sobre problemas complejos, enriqueciendo su comprensión mediante el diálogo constructivo.
                    </p>
            </div>
            <div className=''>
                <h3 className='concepto'>Fase 4</h3>
                    <p>
                    Los estudiantes fueron partícipes de una integración en la que, apoyados en herramientas didácticas como simulaciones y proyectos colaborativos, generaron soluciones creativas a problemas complejos, demostrando su capacidad para aplicar conocimientos de manera práctica.
                    </p>
            </div>



        </div>
    )
}