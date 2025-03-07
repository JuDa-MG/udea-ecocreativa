import React from 'react';
import Grow from '@mui/material/Grow'

export default function ParticipacionCiudana() {


    return (
        <div>
            <Grow in={true}
                style={{ transformOrigin: '0 50 0' }}
                {...(true ? { timeout: 1000 } : {})}
            >
                <div class="container">
                    <h1 width="560" class="art_participacion">Participación</h1>
                    <h1 width="560" class="art_participacion">Ciudadana</h1>
                    <p class="participacion_intro">
                        Como parte de nuestro objetivo en nuestro proceso de aprendizaje, recopilamos los mecanimos de participacion
                        ciudadana los cuales sirven como fortalecimiento en la interacción entre los seres humanos y su entorno. Éstas son mediadas por relaciones de poder que más de lo habitual son desiquilibradas. Por lo anterior las herramientas permiten
                        afrontar las relaciones con el fin de volverlas justas.
                    </p>
                </div>
            </Grow>
            <hr />
            <Grow in={true}
                style={{ transformOrigin: '0 50 0' }}
                {...(true ? { timeout: 1500 } : {})}
            >

                <div>
                    <h1 class="art_ejemplo_participacion"><a class="inst_credits" target='_blank' href="https://elpais.com/america-futura/2023-08-03/la-comuna-en-medellin-que-construye-su-propio-plan-de-accion-ante-el-cambio-climatico.html">👉 El barrio en Medellín que construye su propio plan de acción ante el cambio climático</a></h1>
                    <hr />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IwCTCBOLrMQ?si=kuSfVSZfk1oXze1D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </Grow>
            <hr />

            <div class="container mecanismos conceptos_section">
                <h1 class="mecanismos_tittle">MECANISMOS</h1>
                <div class="">
                    <h2 class="mecanismo_n fs-3"> 📗 Terceros Intervinientes 📗</h2>
                    <p class="concepto_descripcion">
                        Se centra en que cualquier persona (natural o jurídica) puede participar en las actuaciones administrativas
                        que estén relacionadas con permisos o licencias amientales. Se debe realiar una solicitud a quien lleve el caso en cualquier tiempo antes de tomar la decisión. Después se expide el acto administrativo que reconoce al tercero interviniente. Finalmente la autoridad queda en la obligación de notificar a los terceros.
                    </p>
                    <a href="https://www.anla.gov.co/participacion-ciudadana/durante-el-proceso/tercero-interviniente" target='_blank' class="btn btn-success">Conoce más</a>
                </div>
                <hr />
                <div class="">
                    <h2 class="mecanismo_n fs-3"> 📗 Audiencias Públicas Ambientales 📗</h2>
                    <p class="concepto_descripcion">
                        La autoridad ambiental correspondiente debe realizar mínimo con 30 días de antelación a la toma de decisión realizar la audiencia en las que notifica los impactos que los proyectos, obras o actividades pueden generar. En contra parte, la autoridad ambiental es notificada de las modificaciones. canceliaciones del permiso o licencia; en este proceso pueden intervenir todas las personas interesadas, otras autoridades, ONGs, entre otros. Es de destacar que este mecanimo también puede ser solicitado si una obra ya se encuentra en ejecución.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zP1puBkY76U?si=u8Wq4z5_YoJ5bVjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p></p>
                    <a href="https://www.anla.gov.co/participacion-ciudadana/durante-el-proceso/audiencias-publicas-ambientales" target='_blank' class="btn btn-success">Conoce más</a>
                </div>
                <hr />
                <div class="">
                    <h2 class="mecanismo_n fs-3"> 📗 Consulta previa 📗</h2>
                    <p class="concepto_descripcion">
                        La consulta previa es un derecho fundamental fruto de las múltiples luchas por el reconocimiento de las comunidades étnicas a la participación y acceso de la información sobre proyectos, obras o actividades que se pretenda realizar en su territorio.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7vRy-hjEBhE?si=a70dgmCBCM5f47oe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p></p>
                    <a href="https://www.anla.gov.co/participacion-ciudadana/durante-el-proceso/consulta-previa" target='_blank' class="btn btn-success">Conoce más</a>
                </div>
                <hr />
                <div class="">
                    <h2 class="mecanismo_n fs-3"> 📗 Derecho de Petición 📗</h2>
                    <p class="concepto_descripcion">
                        Establece que toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular; y a obtener pronta resolución completa y a fondo sobre la misma.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OH7sbXqCv9g?si=0-paytQfsVv3f58l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p></p>
                    <a href="https://www.minjusticia.gov.co/programas-co/LegalApp/Paginas/quienes-presentan-derecho-de-petición.aspx#:~:text=“Toda%20persona%20tiene%20derecho%20a,para%20garantizar%20los%20derechos%20fundamentales.”" target='_blank' class="btn btn-success">Conoce más</a>
                </div>
                <hr />
                <div class="">
                    <h2 class="mecanismo_n fs-3"> 📗 Participacion en la elaboracion de estudios ambientales 📗</h2>
                    <p class="concepto_descripcion">
                        Garantiza la participación de actores que pueden resultar afectados por la ejecución y puesta en operación de un proyecto de obras y actividades (POA).
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cJeHD8ZS4mM?si=TwrmeOSDGl_oB-Vr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p></p>
                    <a href="https://www.anla.gov.co/participa" target='_blank' class="btn btn-success">Conoce más</a>
                </div>
                <hr />
                <div class="">
                    <h2 class="mecanismo_n fs-3"> 📗 Consultas públicas 📗</h2>
                    <p class="concepto_descripcion">
                        Toda persona puede participar enviando sus comentarios a los proyectos de ley, decreto y actos administrativos.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7vRy-hjEBhE?si=a70dgmCBCM5f47oe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p></p>
                    <a href="https://www.minambiente.gov.co/consultas-publicas/" target='_blank' class="btn btn-success">Conoce más</a>
                </div>
                <hr />
                <div class="">
                    <h2 class="mecanismo_n fs-3"> 📙 Extra 📙</h2>
                    <p class="concepto_descripcion">
                        Finalmente, invitamos a conocer otros mecanismos de participación para que de manera individual podamos establecer una red de monitoreo e información de las diferentes decisiones que se toman en el país.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NvnU8rznTiE?si=S0zktC623XjOFHam" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>


    )
};