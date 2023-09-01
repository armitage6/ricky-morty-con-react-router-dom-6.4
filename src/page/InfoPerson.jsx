import React from 'react'
import portada2 from '../img/portada22.jpg'
import { obtenerPersonaje } from '../data/personajes'
import { useLoaderData, useNavigate } from 'react-router-dom'


export async function loader({ params }) {
    const personaje = await obtenerPersonaje(params.personId)
    if (Object.values(personaje).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No Hay Resultado'
        })
    }
    console.log(personaje)
    return personaje
}


const InfoPerson = () => {

    const navigate = useNavigate();
    const personaje = useLoaderData();

    return (
        <>  <div className='btn-regresar'>

            <button
                onClick={() => navigate('/')}
            >Regresar</button>
        </div>
            <div className='contenedor-info contenedor'>

                <div>
                    <img src={personaje.image} alt="" />

                </div>
                <div className='informacion'>
                    <h3 className='text-center'>Informacion del usuario</h3>
                    <p>Nomebre: <span>{personaje.name}</span></p>
                    <p>Especie: <span>{personaje.species}</span></p>
                    <p>genero: <span>{personaje.gender}</span></p>
                    <p>origen: <span>{personaje.origin.name}</span></p>
                    <p>Locación: <span>{personaje.location.name}</span></p>
                </div>
            </div>
        </>
    )
}

export default InfoPerson
