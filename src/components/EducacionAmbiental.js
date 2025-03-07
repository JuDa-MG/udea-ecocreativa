import React from 'react'
import Grow from '@mui/material/Grow'

export default function EducacionAmbiental() {
    return (
        <div>

            <img class='decoration_1' src="images/decoration_1.gif" />
            <Grow in={true}
                style={{ transformOrigin: '0 50 0' }}
                {...(true ? { timeout: 1000 } : {})}
            >
                <div class='container header_educacion_ambiental'>
                    <h1 class="educacion_ambiental_tittle">EDUCACIóN AMBIENTAL</h1>
                    <p class="educacion_ambiental_intro">
                        Imagina un despertar hacia una nueva perspectiva, una en la que el mundo natural que nos rodea se revela en toda su grandeza y fragilidad. La educación ambiental es la puerta a este despertar, una invitación a comprender nuestro papel en el equilibrio delicado de la vida en la Tierra.
                    </p>
                    <Grow in={true}
                        style={{ transformOrigin: '0 50 0' }}
                        {...(true ? { timeout: 1500 } : {})}
                    >
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/sKgSyDusN1A?si=ZXaCDmx8kznkzyDu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Grow>
                </div>
            </Grow>
            <hr />
            <div className='container conceptos_section'>
                <Grow in={true}
                    style={{ transformOrigin: '0 50 0' }}
                    {...(true ? { timeout: 2000 } : {})}
                >
                    <div class="">
                        <h2 class="concepto">Gaia</h2>
                        <p class="concepto_descripcion">Gaia, la personificación de la Tierra en la mitología griega, no es solo un símbolo antiguo, sino una representación poética de nuestro planeta viviente. Gaia nos recuerda que la Tierra no es un conjunto inerte de rocas, gases y agua, sino un organismo vibrante, un sistema complejo donde cada elemento está interconectado.</p>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/IsXpClZvRAg?si=3Rbekho7h3NMWs05" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <p class="concepto_descripcion"></p>
                    </div>
                </Grow>
                <hr />
                <Grow in={true}
                    style={{ transformOrigin: '0 50 0' }}
                    {...(true ? { timeout: 2500 } : {})}
                >
                    <div class="">
                        <h2 class="concepto"> ecofeminismo</h2>
                        <p class="concepto_descripcion">Las raíces del ecofeminismo en Colombia se remontan a las luchas de las mujeres indígenas y afrodescendientes por la defensa de sus territorios ancestrales y la conservación de la biodiversidad. Estas mujeres, guardianas de saberes ancestrales y prácticas sustentables, han sido pioneras en la resistencia contra la explotación ambiental y la discriminación de género.</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/400A7gU5qT4?si=IvYPddhOGI4A64uu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <p class="concepto_descripcion">
                            Por lo que el ecofeminismo emerge  como parte de esta diversidad. Es una corriente de pensamiento y movimiento social, que además busca que la
                            dignificación de la mujer en el planeta parta del reconocimiento de la diversidad cultural
                            y del contexto en el que se encuentran inmersos los numerosos grupos de mujeres que
                            habitan el mundo, reconociendo la relación intrínseca de la mujer con la Naturaleza y
                            dignificando al mismo tiempo esta condición
                        </p>
                        <a href="https://revistas.udea.edu.co/index.php/derypol/article/view/11059" class="btn btn-success" target='_blank'>Conoce más sobre ECOFEMINISMO</a>
                    </div>
                </Grow>
                <hr />

                <div class="">
                    <h2 class="concepto"> Sociedad del riesgo</h2>
                    <p class="concepto_descripcion">
                        Es un concepto acuñado por el sociólogo alemán <a class="inst_credits" target='_blank' href="https://www.youtube.com/watch?v=djycVmNA_P4">Ulrich Beck</a> a finales del siglo XX el cual desafió las concepciones sobre obtención recursos y las decisiones que se estaban tomando en busca del desarrollo. Es una autoconfrontación crítica sobre las consecuencias de los avances tecnológicos y científicos; pues lo que antes parecía 'funcional' y 'racional' emerge como amenaza a la vida.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZqgMp07AsOQ?si=gMj_LWax8Sal8Icp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p class="concepto_descripcion">
                        Como sociedad del riesgo es nuestro deber concebir  la interconexión de los sistemas en los que vivimos, comprender nuestro control como limitado; en nuestro actuar se pueden desencadenar procesos que no sabemos muy bien como detener y que en última instancia plantear si los riesgos son tan altos, ¿Vale la pena seguir produciendo?
                    </p >
                    <p class="concepto_descripcion">
                        Finalmente, se debe buscar ampliar el rango de participación para construir lo que Ulrich demoninaba como <a class="inst_credits" target='_blank' href="https://repository.unad.edu.co/bitstream/handle/10596/19053/1100891852.pdf?sequence=1&isAllowed=y">sociedad cosmopolita</a>, una sociedad que elimina sus fronteras y logra apropiar de manera empática las luchas de los cohabitantes de la tierra, pues por la interconexión del mundo moderno los efectos en un lugar del mundo tienen consecuencias en otros.
                    </p>
                </div>

                <hr />

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2 class="concepto">Principio de Precaución</h2>
                            <p class="">Es un principio jurídico que establece que ante la posibilidad de un daño grave o irreversible al  ambiente o la salud humana, las autoridades deben tomar medidas preventivas incluso si no existe una certeza científica absoluta sobre el riesgo.
                                En otras palabras, el Principio de Precaución busca evitar daños potenciales al ambiente o la salud humana, incluso si <b>NO</b> hay pruebas concluyentes de que esos daños ocurrirán. Este principio se basa en la idea de que es mejor prevenir que curar, y que es necesario actuar con cautela cuando se trata de proteger el ambiente y la salud pública.</p>
                            <ul>
                                <p>Según la <a class="inst_credits" target='_blank' href="https://www.corteconstitucional.gov.co/relatoria/2016/t-622-16.htm" title="">Corte Constitucional </a> para adoptar el principio: </p>
                                <li>Gravedad a daño irreversible.</li>
                                <li>Riesgo o peligro a un perjucio o daño.</li>
                                <li>Que haya un mínimo de certeza.</li>
                                <li><a class="inst_credits" target='_blank' href="https://www.bogotajuridica.gov.co/sisjur/listados/tematica2.jsp?subtema=32491&cadena=m" title=""> In dubio pro ambiente.</a></li>
                            </ul>
                        </div>

                        <div class="col">
                            <h2 class="concepto"> Principio de Prevención</h2>
                            <p class="">El contenido del principio de prevención está dirigido por la
                                ciencia y por la detección de informaciones <b> ciertas y precisas </b>
                                sobre la peligrosidad y el riesgo ofrecido por la actividad o
                                comportamiento, revelándose de ese modo una situación de
                                mayor verosimilitud sobre el potencial lesivo.</p>
                            <p class="">Es decir que para éste principio existe evidencia concreta. Cuando hay certeza casi total sobre la relación causal entre la acción y el
                                daño, se aplica el principio de prevención</p>
                        </div>
                    </div>
                </div>

                <hr />
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2 class="concepto">Derecho a la naturaleza</h2>
                            <p class="">El derecho a la naturaleza en Colombia se fundamenta en el artículo 42 de la Constitución Política de 1991, que establece que "las autoridades colombianas deberán proteger las diversidades étnica y cultural de la Nación, y garantizar a todos los colombianos el goce de un ambiente sano. Este derecho ha sido interpretado por la Corte Constitucional como un derecho fundamental que protege los ecosistemas y la biodiversidad del país.</p>
                        </div>

                        <div class="col">
                            <h2 class="concepto">Derechos de la naturaleza</h2>
                            <p class="">Esta visión biocéntrica reconoce que la naturaleza tiene valor propio, independientemente de su utilidad para el ser humano. En 2016, la Corte Constitucional colombiana reconoció el <a href="https://www.udea.edu.co/wps/portal/udea/web/inicio/udea-noticias/udea-noticia/!ut/p/z0/fYwxC8IwEIX_ikvHcrHWqGNxEMTBQaTNIkcT7NWaa5NU_PmmOoiL8Lh73_HugYISlMUHXTEQW-wiV0pe1pttNi9ycRAyl6KQx3y5ynaL01nAHtT_QGygdhhUAapmG8wzQNmzC9iN2mAi0P9Sw3fz8dOcWQ5UE_pEvL8taZ5S37PnmoxGnQhHnGJwGDj1Y2vi0ibKmbphn6JlD_1NVS8Vesui/" target='_blank' class="inst_credits"> río Atrato como sujeto de derechos</a>, sentando un precedente histórico en América Latina. Desde entonces, varias sentencias judiciales y normativas han reconocido los derechos de otros ecosistemas, como los páramos y los humedales.</p>
                            <p class="">En este marco, se busca la restaruación y mitigación, protección y conservación, así como el buen mantenimiento de los bienes comunes.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="">
                    <h2 class="concepto"> El ambiente como sistema complejo</h2>
                    <p class="concepto_descripcion">Abordar el ambiente como sistema complejo implica reconocer las interrelaciones que generan los problemas, sus incertidumbres en un contexto socio cultural y sus consecuencias. Es un cuestionamiento crítico y una invitación a cambiar los modelos de producción para incluir la naturaleza.</p>
                    <p class="concepto_descripcion">Abordar los desafíos ambientales en Colombia como la deforestación, contaminación, cambio climático, pérdida de biodiversidad, gestión inadecuadad de recursos naturales, requieren un enfoque sistémico que reconozca la interconexión de los diferentes elementos del ambiente y considere las dimensiones sociales, económicas, políticas e institucionales. Este enfoque implica promover la participación social, fortalecer la gobernanza ambiental, incentivar la producción y el consumo sostenible, invertir en investigación en busca de evidencia que permitea promover la educación ambiental.</p>
                </div>
                <hr />
                <div class="">
                    <h2 class="concepto"> Bioeconomía</h2>
                    <p class="concepto_descripcion">Se puede entender como un enfoque económico que busca utilizar los recursos biológicos y los procesos biológicos para generar valor de manera sustentable. En otras palabras, se trata de aprovechar la biomasa, los biocombustibles, los biomateriales y otros productos derivados de la biología para crear nuevos productos, servicios y cadenas de valor.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pg4g9cL0YCk?si=jcQyl-gjfiWGOxWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p class="concepto_descripcion">Un ejemplo de bioeconomía en acción es la producción de biocombustibles a partir de cultivos como la caña de azúcar o el maíz. Estos biocombustibles pueden utilizarse para reemplazar a los combustibles fósiles en el transporte, reduciendo así las emisiones de gases de efecto invernadero y la contaminación del aire.</p>
                </div>
                <hr />
                <div class="">
                    <div class="row">
                        <div class="col">
                            <h2 class="concepto">Sostenibildiad</h2>
                            <p>Actualmente es un concepto muy criticado pues ha quedado evidenciado cómo ha sido empleado como "fachada verde", es decir,  mediante práticas publicitarias y discursos sin evidencia comprobable han buscado justificar los modelos de producción sin realizar verdaderos cambios de fondo.</p>
                        </div>
                        <div class="col">
                            <h2 id="sustentable" class="concepto">Sustentabilidad</h2>
                            <p>Por su parte, tiene como eje central las soluciones basadas en comunidades y la naturaleza. En este marco, se apunta a cambios estructurales para no comprometer los derechos fundamentales de las generaciones futuras. Por ejemplo construyendo economías sustentables basadas en principios de equidad y justicia social. </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="">
                    <h2 class="concepto"> Bienestar Social</h2>
                    <p class="concepto_descripcion">El bienestar social es la <a href="https://www.redalyc.org/pdf/727/72717407.pdf"  target='_blank' class="inst_credits"> valoración que hacemos de las circunstancias y el funcionamiento dentro de la sociedad</a>. Es imprescindible estar y sentirse perteneciente a un grupo, a una comunidad donde es necesario que se disfrute de confianza, aceptación y actitudes positivas hacia los otros y aceptación de los aspectos positivos y negativos de nuestra propia vida.</p>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LFPyswkqcBQ?si=acxGHqanC1HcHun4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p class="concepto_descripcion">La gente sana no sólo se preocupa por conocer el tipo de mundo en el que vive, sino que tiene la sensación de
                        que es capaz de entender lo que acontece a su alrededor.
                        Vemos un sentido a lo que pasa, y encontramos una lógica en los acontecimientos que nos rodea</p>
                </div>
                <hr />
                <div class="">
                    <h2 class="concepto"> justicia distributiva</h2>
                    <p class="concepto_descripcion">Se entiende como la distribución equitativa de los bienes esenciales de una sociedad, sin desconocer el contexto ambiental en el que ésta cohabita con múltiples especies de flora y fauna que cumplen un rol indispensable en el sostenimiento del equilibrio que permite la vida.</p>
                    <p class="concepto_descripcion">Ahora bien, no se pretende caer en la definición estricta de 'a todos se les da lo mismo', pues esto es desconocer las diversidades de las sociedades. Por lo que se debe entender justicia distributiva en conjunto con las dinámicas de la sociedad, ya que por ejemplo, existen grupos sociales con alta  capacidad adquisitiva los cuales pueden permitirse a acceder a servicios como la educación y salud de manera fácil; en esta línea, la justicia distributiva recae en la disponibilidad de becas y ofertas educativas así como planes integrados de salud para personas de bajos recursos.</p>
                </div>
                <div class="">
                    <h2 class="concepto">justicia Participativa</h2>
                    <p class="concepto_descripcion">Este  concepto refiere a la inclusión de todas las comunidades afectadas por decisiones de cuestión ambiental. Esto pasa por propiciar mecanismos para votar, ser escuchadas y en última instancia decidir de manera autónoma y transparente.</p>
                    <p class="concepto_descripcion">De esta forma sus preocupaciones y necesidades estarán en el foco de la discusión reconociendo así sus vulnerabilidades.</p>
                </div>
                <hr />
                <div class=""> <h2 class="concepto"> Ecología Política</h2>
                    <p class="concepto_descripcion">Refiere a las interacciones entre los seres humanos y su entorno medidas por relaciones de poder. En síntesis, el cambio ambiental está íntimimente correlacionado con los procesos sociales y políticos a diversas escalas.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GfW7ysYIB4Y?si=clsVbY9ej_J6yh0q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p class="concepto_descripcion">De la ecología política surgen movimientos que buscan la transformación. Por lo que en las problemáticas ambientales es necesario vincular las relaciones sociales de producción y la distribución del poder.</p>
                </div>


            </div>
        </div>
    )
}