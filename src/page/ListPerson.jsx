import FrontPage from "../componets/FrontPage"
import Card from "../componets/Card"
import { obtenerPersonajes } from "../data/personajes"
import { useLoaderData, Link } from "react-router-dom"

export function loader() {
    const personajes = obtenerPersonajes()

    return personajes
}


const ListPerson = () => {

    const personajes = useLoaderData()
    console.log(personajes)
    return (
        <>
            <FrontPage />

            <div className="list-container">
                <h1 className="text-center">Lista de Personajes</h1>
                <div className="nav-page">
                    <Link className="link">Anterior</Link>
                    <Link className="link">Siguiente</Link>
                </div>
                <div className="container-cards contenedor2">
                    {personajes.results.length ? (
                        <>
                            {personajes.results.map(personaje => (
                                <Card personaje={personaje} key={personaje.id} />
                            ))}

                        </>
                    ) : (
                        <p>No se ha Encontrado Personajes</p>
                    )}



                </div>

                <div className="nav-page">
                    <Link to={personajes.info.prev} className="link">Anterior</Link>
                    <Link to={personajes.info.nex} className="link">Siguiente</Link>
                </div>
            </div >
        </>
    )
}

export default ListPerson
