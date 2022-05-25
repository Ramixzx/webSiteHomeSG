import React from 'react';
import iconPlus from '../../../Assets/icons/plus-circle.svg';
import './Questions.css'

const Questions = () => {
  return ( 
    <>
    <section className='help--questions-container'>
      <h2 className='help--questions-title'>Preguntas frecuentes</h2>
      <p className='help--questions-p'>¿Necesitas una respuesta rápida? encuentra lo que buscas en las preguntas más populares de nuestros usuarios.</p>
      <div className='help--questions-categorys'>
        <h3>Generales</h3>
        </div>
        <div id="accordion" className='accordion--styles'>
          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link card--contain" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">  
                <p>¿Qué hace Space Guru?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                Space Guru es la manera inteligente de guardar todo lo que quieras por el tiempo que necesites, sin moverte de tu casa. Ofrecemos el mejor servicio y atención personalizada para que puedas hacer espacio en tu vida para las cosas importantes. Space Guru es como tener un espacio en tu casa, ¡fuera de tu casa!
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">  
                <p>¿Cómo funciona Space Guru?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
              Muy simple:
                Elegí los ítems que quieras guardar y cotizá por ítem o solo por el espacio que necesitás (no pagues de más!). El contrato mínimo de guardado es de 3 meses y el precio mínimo es el equivalente a 1m3 ($700).

                Podés cotizar a través de nuestro sitio, o llamarnos al (011) 5263-5754 o por WhatsApp y pedir tu presupuesto.

                Elegí un horario para que busquemos tus cosas.
                Tus cosas serán fotografiadas y catalogadas, para que las puedas ver en todo momento desde nuestra app. Las guardamos con cuidado, y además las aseguramos. Todo bajo control.
                Cuando quieras tu cosas de vuelta, nos avisás y te las devolvemos en 24 horas.
                ¡Pero no solo eso! Si querés poner tus cosas en circulación y ganar dinero extra con lo que no usás, podés alquilar tu cosas al precio que nos indiques en nuestra página de alquiler.  
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">  
                <p>¿Por qué me conviene Space Guru?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                ¡Porque reinventamos el concepto de baulera para adaptarlo a las necesidades reales de cada uno de nuestros consumidores. ¡Por eso somos una baulera inteligente!

                Mejor precio: En Space Guru tenemos presupuestos personalizados para que pagues solo por lo que usás. Podes cotizar por metro cúbico o por los ítems que necesites. De esta manera solo abonás por el espacio que ocupan tus cosas. ¡Con Space Guru nunca pagás de más!
                Ahorrás tiempo: No necesitas ir nunca más hasta un depósito. Olvidate de conseguir o tener auto, de buscar estacionamiento o de que te hagan una multa. Ahorrate el problema: solicitá un retiro y nosotros nos ocupamos de buscar tus cosas por tu domicilio en el día y horario que vos elijas y los llevamos a nuestro almacén ubicado en Villa Crespo.
                Tus cosas, siempre a mano: Una vez tus cosas llegan a nuestro depósito, las catalogamos cuidadosamente y las fotografiamos. 48 h después estarán disponibles online en tu catálogo personal, al que podrás acceder con tu usuario y contraseña. Así podés ver todo lo que tenés desde tu compu o celu y nunca más olvidarte o dudar de lo que guardaste.
                Servicio de retiro y entrega: Te llevamos tus cosas de vuelta a tu domicilio. Cuando vos quieras, solicitas la devolución de tus articulos desde nuestro sitio o por WhatsApp, y nosotros nos encargamos de llevarlas a tu puerta.
                Atención personalizada: ¡Te acompañamos en cada paso! Estamos para simplificarte la vida, por eso tenemos un equipo de Gurúes de Atención al cliente preparados para asesorarte cuando vos quieras. Te damos respuestas claras e inmediatas. Nada de bucear entre miles de respuestas predeterminadas. Esto es inteligente y personalizado.
                Posibilidad de alquilar tu cosas: Pero lo mejor de todo, es que te damos la posibilidad de hacer dinero extra con aquellas cosas que tengas guardadas, para ponerlas en circulación y revalorizarlas.
                Así, no solo te simplificamos la vida, sino que además ayudamos al planeta, consumiendo menos cosas que podemo alquilar con un click :) Buenísmo, ¿no?

                Pedinos un presupuesto personalizado por cualquiera de nuestros medios de contacto:
                Mail: hola@space.guru WhatsApp: 11 62056343 Tel: 011 5263- 5754 
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link card--contain" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">  
                <p>¿En qué lugares están?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
              <div className="card-body">
                El precio del metro cúbico (m3) es de $950 pesos. Para que tengas una idea, un metro cúbico sería el espacio que ocupa un sillón de dos cuerpos aproximadamente.

                Contamos con un contrato mínimo de guardado de 3 meses por un valor mínimo equivalente a 1m3 ($950 pesos).

                Esto quiere decir que, si guardás ítems que ocupen menos de 1m3, el valor mínimo va a seguir siendo $950 (¡por eso te conviene guardar ítems hasta “completar” ese volumen!).

                Si tus cosas ocupan más de 1m3, te vamos a cobrar el proporcional, para que solo pagues por el espacio que usás.

                Por ejemplo:

                1 caja de 0.8 m3 - Pagás el valor mínimo de guardado: $950.
                1 heladera de 1m3 + 1 caja de 0.8 m3 - Pagás $1710.

                Podés cotizar por ítem o por Metro cúbico en nuestro cotizador. 
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">  
                <p>¿Cuándo puedo utilizar Space Guru?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
              <div className="card-body">
                Podemos guardar cualquier cosa que quepa en nuestro depósito y que pueda ser trasladada por 2 personas.

                No está permitido almacenar ninguno de los siguientes elementos prohibidos:

                Alimentos u otros productos perecederos
                Flora y/o fauna viva
                Artículos particularmente picantes, incluidos los artículos que han tenido una alta exposición al humo del cigarrillo
                Inflamables
                Explosivos
                Armas de fuego y municiones
                Gas comprimido
                Materiales venenosos
                Materiales de riesgo de contaminación biológica
                Medicamentos en general o residuos medicinales
                Artículos peligrosos
                Sustancias y materiales ilegales
                Líquidos, geles o aerosoles, incluidos vinos y alcoholes
                Cualquier artículo que requiera control de temperatura regulado
                Las cajas cerradas están sujetas a estas mismas restricciones. Si se sospecha que un contenedor cerrado o sellado contiene artículos prohibidos, será devuelto o se rechazará en el punto de retiro.

                En caso de que tengamos que devolver artículos, el costo de la devolución o eliminación de éstos estará a cargo del cliente.

                ¡Recordá que si tenés alguna duda con respecto a los artículos restringidos por Space Guru podes contactarte con nuestros Gurúes de Atención al Cliente!

                Si quieres ver más detalles, o aún tenés dudas, podés visitar nuestra Guía de Almacenamiento y nuestros Términos y Condiciones
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">  
                <p>¿Cómo hago para usar Space Guru?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
              <div className="card-body">
                Por el momento, estamos cubriendo la zona de CABA y GBA.

                Muy pronto vamos a estar en más lugares. Si querés que estemos en tu zona, mandanos un mail y contanos adónde necesitarías de Space Guru.
              </div>
            </div>
          </div>
      </div>
      <div className='help--questions-categorys'>
        <h3>Precios</h3>
        </div>
        <div id="accordion" className='accordion--styles'>
          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link card--contain" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">  
                <p>¿Cuál es el costo de almacenamiento?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
              <div className="card-body">
                Space Guru es la manera inteligente de guardar todo lo que quieras por el tiempo que necesites, sin moverte de tu casa. Ofrecemos el mejor servicio y atención personalizada para que puedas hacer espacio en tu vida para las cosas importantes. Space Guru es como tener un espacio en tu casa, ¡fuera de tu casa!
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">  
                <p>¿Cuál es el costo del servicio de entrega y devolución?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
              <div className="card-body">
                El precio del metro cúbico (m3) es de $950 pesos. Para que tengas una idea, un metro cúbico sería el espacio que ocupa un sillón de dos cuerpos aproximadamente.

                Contamos con un contrato mínimo de guardado de 3 meses por un valor mínimo equivalente a 1m3 ($950 pesos).

                Esto quiere decir que, si guardás ítems que ocupen menos de 1m3, el valor mínimo va a seguir siendo $950 (¡por eso te conviene guardar ítems hasta “completar” ese volumen!).

                Si tus cosas ocupan más de 1m3, te vamos a cobrar el proporcional, para que solo pagues por el espacio que usás.

                Por ejemplo:

                1 caja de 0.8 m3 - Pagás el valor mínimo de guardado: $950.
                1 heladera de 1m3 + 1 caja de 0.8 m3 - Pagás $1710.

                Podés cotizar por ítem o por Metro cúbico en nuestro cotizador.
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">  
                <p>¿Qué medios de pago puedo utilizar?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion">
              <div className="card-body">
                Muy simple:
                Elegí los ítems que quieras guardar y cotizá por ítem o solo por el espacio que necesitás (no pagues de más!). El contrato mínimo de guardado es de 3 meses y el precio mínimo es el equivalente a 1m3 ($700).

                Podés cotizar a través de nuestro sitio, o llamarnos al (011) 5263-5754 o por WhatsApp y pedir tu presupuesto.

                Elegí un horario para que busquemos tus cosas.
                Tus cosas serán fotografiadas y catalogadas, para que las puedas ver en todo momento desde nuestra app. Las guardamos con cuidado, y además las aseguramos. Todo bajo control.
                Cuando quieras tu cosas de vuelta, nos avisás y te las devolvemos en 24 horas.
                ¡Pero no solo eso! Si querés poner tus cosas en circulación y ganar dinero extra con lo que no usás, podés alquilar tu cosas al precio que nos indiques en nuestra página de alquiler.  
              </div>
            </div>
          </div>
      </div>
      <div className='help--questions-categorys'>
        <h3>Mis objetos</h3>
        </div>
        <div id="accordion" className='accordion--styles'>
          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link card--contain" data-toggle="collapse" data-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">  
                <p>¿Qué puedo guardar y qué no?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordion">
              <div className="card-body">
                Space Guru es la manera inteligente de guardar todo lo que quieras por el tiempo que necesites, sin moverte de tu casa. Ofrecemos el mejor servicio y atención personalizada para que puedas hacer espacio en tu vida para las cosas importantes. Space Guru es como tener un espacio en tu casa, ¡fuera de tu casa!
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">  
                <p>¿Cómo accedo a mis cosas y cómo se entregan?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordion">
              <div className="card-body">
                El precio del metro cúbico (m3) es de $950 pesos. Para que tengas una idea, un metro cúbico sería el espacio que ocupa un sillón de dos cuerpos aproximadamente.

                Contamos con un contrato mínimo de guardado de 3 meses por un valor mínimo equivalente a 1m3 ($950 pesos).

                Esto quiere decir que, si guardás ítems que ocupen menos de 1m3, el valor mínimo va a seguir siendo $950 (¡por eso te conviene guardar ítems hasta “completar” ese volumen!).

                Si tus cosas ocupan más de 1m3, te vamos a cobrar el proporcional, para que solo pagues por el espacio que usás.

                Por ejemplo:

                1 caja de 0.8 m3 - Pagás el valor mínimo de guardado: $950.
                1 heladera de 1m3 + 1 caja de 0.8 m3 - Pagás $1710.

                Podés cotizar por ítem o por Metro cúbico en nuestro cotizador.
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">  
                <p>¿Cómo pido un retiro o una devolución?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordion">
              <div className="card-body">
                Muy simple:
                Elegí los ítems que quieras guardar y cotizá por ítem o solo por el espacio que necesitás (no pagues de más!). El contrato mínimo de guardado es de 3 meses y el precio mínimo es el equivalente a 1m3 ($700).

                Podés cotizar a través de nuestro sitio, o llamarnos al (011) 5263-5754 o por WhatsApp y pedir tu presupuesto.

                Elegí un horario para que busquemos tus cosas.
                Tus cosas serán fotografiadas y catalogadas, para que las puedas ver en todo momento desde nuestra app. Las guardamos con cuidado, y además las aseguramos. Todo bajo control.
                Cuando quieras tu cosas de vuelta, nos avisás y te las devolvemos en 24 horas.
                ¡Pero no solo eso! Si querés poner tus cosas en circulación y ganar dinero extra con lo que no usás, podés alquilar tu cosas al precio que nos indiques en nuestra página de alquiler.  
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link card--contain" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="true" aria-controls="collapseThirteen">  
                <p>¿Puedo recibir mis cosas en una dirección distinta a la mía?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseThirteen" className="collapse" aria-labelledby="headingThirteen" data-parent="#accordion">
              <div className="card-body">
                ¡Porque reinventamos el concepto de baulera para adaptarlo a las necesidades reales de cada uno de nuestros consumidores. ¡Por eso somos una baulera inteligente!

                Mejor precio: En Space Guru tenemos presupuestos personalizados para que pagues solo por lo que usás. Podes cotizar por metro cúbico o por los ítems que necesites. De esta manera solo abonás por el espacio que ocupan tus cosas. ¡Con Space Guru nunca pagás de más!
                Ahorrás tiempo: No necesitas ir nunca más hasta un depósito. Olvidate de conseguir o tener auto, de buscar estacionamiento o de que te hagan una multa. Ahorrate el problema: solicitá un retiro y nosotros nos ocupamos de buscar tus cosas por tu domicilio en el día y horario que vos elijas y los llevamos a nuestro almacén ubicado en Villa Crespo.
                Tus cosas, siempre a mano: Una vez tus cosas llegan a nuestro depósito, las catalogamos cuidadosamente y las fotografiamos. 48 h después estarán disponibles online en tu catálogo personal, al que podrás acceder con tu usuario y contraseña. Así podés ver todo lo que tenés desde tu compu o celu y nunca más olvidarte o dudar de lo que guardaste.
                Servicio de retiro y entrega: Te llevamos tus cosas de vuelta a tu domicilio. Cuando vos quieras, solicitas la devolución de tus articulos desde nuestro sitio o por WhatsApp, y nosotros nos encargamos de llevarlas a tu puerta.
                Atención personalizada: ¡Te acompañamos en cada paso! Estamos para simplificarte la vida, por eso tenemos un equipo de Gurúes de Atención al cliente preparados para asesorarte cuando vos quieras. Te damos respuestas claras e inmediatas. Nada de bucear entre miles de respuestas predeterminadas. Esto es inteligente y personalizado.
                Posibilidad de alquilar tu cosas: Pero lo mejor de todo, es que te damos la posibilidad de hacer dinero extra con aquellas cosas que tengas guardadas, para ponerlas en circulación y revalorizarlas.
                Así, no solo te simplificamos la vida, sino que además ayudamos al planeta, consumiendo menos cosas que podemo alquilar con un click :) Buenísmo, ¿no?

                Pedinos un presupuesto personalizado por cualquiera de nuestros medios de contacto:
                Mail: hola@space.guru WhatsApp: 11 62056343 Tel: 011 5263- 5754
              </div>
            </div>
          </div>
      </div>
      <div className='help--questions-categorys'>
        <h3>Empaquetado y embalaje</h3>
        </div>
        <div id="accordion" className='accordion--styles'>
          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link card--contain" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="true" aria-controls="collapseFourteen">  
                <p>¿Existe algún tipo de seguro para mis cosas?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseFourteen" className="collapse" aria-labelledby="headingFourteen" data-parent="#accordion">
              <div className="card-body">
                Space Guru es la manera inteligente de guardar todo lo que quieras por el tiempo que necesites, sin moverte de tu casa. Ofrecemos el mejor servicio y atención personalizada para que puedas hacer espacio en tu vida para las cosas importantes. Space Guru es como tener un espacio en tu casa, ¡fuera de tu casa!
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">  
                <p>¿Qué pasa si cancelo la entrega o no hay nadie en mi domicilio?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseFifteen" className="collapse" aria-labelledby="headingFifteen" data-parent="#accordion">
              <div className="card-body">
                El precio del metro cúbico (m3) es de $950 pesos. Para que tengas una idea, un metro cúbico sería el espacio que ocupa un sillón de dos cuerpos aproximadamente.

                Contamos con un contrato mínimo de guardado de 3 meses por un valor mínimo equivalente a 1m3 ($950 pesos).

                Esto quiere decir que, si guardás ítems que ocupen menos de 1m3, el valor mínimo va a seguir siendo $950 (¡por eso te conviene guardar ítems hasta “completar” ese volumen!).

                Si tus cosas ocupan más de 1m3, te vamos a cobrar el proporcional, para que solo pagues por el espacio que usás.

                Por ejemplo:

                1 caja de 0.8 m3 - Pagás el valor mínimo de guardado: $950.
                1 heladera de 1m3 + 1 caja de 0.8 m3 - Pagás $1710.

                Podés cotizar por ítem o por Metro cúbico en nuestro cotizador.
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">  
                <p>¿Cómo debo embalar mis cosas?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseSixteen" className="collapse" aria-labelledby="headingSixteen" data-parent="#accordion">
              <div className="card-body">
                Muy simple:
                Elegí los ítems que quieras guardar y cotizá por ítem o solo por el espacio que necesitás (no pagues de más!). El contrato mínimo de guardado es de 3 meses y el precio mínimo es el equivalente a 1m3 ($700).

                Podés cotizar a través de nuestro sitio, o llamarnos al (011) 5263-5754 o por WhatsApp y pedir tu presupuesto.

                Elegí un horario para que busquemos tus cosas.
                Tus cosas serán fotografiadas y catalogadas, para que las puedas ver en todo momento desde nuestra app. Las guardamos con cuidado, y además las aseguramos. Todo bajo control.
                Cuando quieras tu cosas de vuelta, nos avisás y te las devolvemos en 24 horas.
                ¡Pero no solo eso! Si querés poner tus cosas en circulación y ganar dinero extra con lo que no usás, podés alquilar tu cosas al precio que nos indiques en nuestra página de alquiler.  
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link card--contain" data-toggle="collapse" data-target="#collapseSeventeen" aria-expanded="true" aria-controls="collapseSeventeen">  
                <p>¿Qué debo tener en cuenta a la hora de guardar electrodomésticos?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseSeventeen" className="collapse" aria-labelledby="headingSeventeen" data-parent="#accordion">
              <div className="card-body">
                ¡Porque reinventamos el concepto de baulera para adaptarlo a las necesidades reales de cada uno de nuestros consumidores. ¡Por eso somos una baulera inteligente!

                Mejor precio: En Space Guru tenemos presupuestos personalizados para que pagues solo por lo que usás. Podes cotizar por metro cúbico o por los ítems que necesites. De esta manera solo abonás por el espacio que ocupan tus cosas. ¡Con Space Guru nunca pagás de más!
                Ahorrás tiempo: No necesitas ir nunca más hasta un depósito. Olvidate de conseguir o tener auto, de buscar estacionamiento o de que te hagan una multa. Ahorrate el problema: solicitá un retiro y nosotros nos ocupamos de buscar tus cosas por tu domicilio en el día y horario que vos elijas y los llevamos a nuestro almacén ubicado en Villa Crespo.
                Tus cosas, siempre a mano: Una vez tus cosas llegan a nuestro depósito, las catalogamos cuidadosamente y las fotografiamos. 48 h después estarán disponibles online en tu catálogo personal, al que podrás acceder con tu usuario y contraseña. Así podés ver todo lo que tenés desde tu compu o celu y nunca más olvidarte o dudar de lo que guardaste.
                Servicio de retiro y entrega: Te llevamos tus cosas de vuelta a tu domicilio. Cuando vos quieras, solicitas la devolución de tus articulos desde nuestro sitio o por WhatsApp, y nosotros nos encargamos de llevarlas a tu puerta.
                Atención personalizada: ¡Te acompañamos en cada paso! Estamos para simplificarte la vida, por eso tenemos un equipo de Gurúes de Atención al cliente preparados para asesorarte cuando vos quieras. Te damos respuestas claras e inmediatas. Nada de bucear entre miles de respuestas predeterminadas. Esto es inteligente y personalizado.
                Posibilidad de alquilar tu cosas: Pero lo mejor de todo, es que te damos la posibilidad de hacer dinero extra con aquellas cosas que tengas guardadas, para ponerlas en circulación y revalorizarlas.
                Así, no solo te simplificamos la vida, sino que además ayudamos al planeta, consumiendo menos cosas que podemo alquilar con un click :) Buenísmo, ¿no?

                Pedinos un presupuesto personalizado por cualquiera de nuestros medios de contacto:
                Mail: hola@space.guru WhatsApp: 11 62056343 Tel: 011 5263- 5754
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">  
                <p>¿Puedo enviar mis cosas directamente a Space Guru?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseEighteen" className="collapse" aria-labelledby="headingEighteen" data-parent="#accordion">
              <div className="card-body">
                Podemos guardar cualquier cosa que quepa en nuestro depósito y que pueda ser trasladada por 2 personas.

                No está permitido almacenar ninguno de los siguientes elementos prohibidos:

                Alimentos u otros productos perecederos
                Flora y/o fauna viva
                Artículos particularmente picantes, incluidos los artículos que han tenido una alta exposición al humo del cigarrillo
                Inflamables
                Explosivos
                Armas de fuego y municiones
                Gas comprimido
                Materiales venenosos
                Materiales de riesgo de contaminación biológica
                Medicamentos en general o residuos medicinales
                Artículos peligrosos
                Sustancias y materiales ilegales
                Líquidos, geles o aerosoles, incluidos vinos y alcoholes
                Cualquier artículo que requiera control de temperatura regulado
                Las cajas cerradas están sujetas a estas mismas restricciones. Si se sospecha que un contenedor cerrado o sellado contiene artículos prohibidos, será devuelto o se rechazará en el punto de retiro.

                En caso de que tengamos que devolver artículos, el costo de la devolución o eliminación de éstos estará a cargo del cliente.

                ¡Recordá que si tenés alguna duda con respecto a los artículos restringidos por Space Guru podes contactarte con nuestros Gurúes de Atención al Cliente!

                Si quieres ver más detalles, o aún tenés dudas, podés visitar nuestra Guía de Almacenamiento y nuestros Términos y Condiciones
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">  
                <p>¿Qué pasa si accidentamente envío un objeto prohibido?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseNineteen" className="collapse" aria-labelledby="headingNineteen" data-parent="#accordion">
              <div className="card-body">
                Por el momento, estamos cubriendo la zona de CABA y GBA.

                Muy pronto vamos a estar en más lugares. Si querés que estemos en tu zona, mandanos un mail y contanos adónde necesitarías de Space Guru.
              </div>
            </div>
          </div>

          <div className="card card--styles">
            <h5 className="mb-0">
              <a className="btn btn-link collapsed card--contain" data-toggle="collapse" data-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">  
                <p>Puedo guardar mis objetos de valor?</p>
                <span><img src={iconPlus} alt="See more" /></span>
              </a>
            </h5>
            <div id="collapseTwenty" className="collapse" aria-labelledby="headingTwenty" data-parent="#accordion">
              <div className="card-body">
                Por el momento, estamos cubriendo la zona de CABA y GBA.

                Muy pronto vamos a estar en más lugares. Si querés que estemos en tu zona, mandanos un mail y contanos adónde necesitarías de Space Guru.
              </div>
            </div>
          </div>
      </div>
    </section>
    </>
   );
}
 
export default Questions;