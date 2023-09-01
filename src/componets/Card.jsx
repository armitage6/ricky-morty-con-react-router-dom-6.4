import prueba from '../img/prueba.jpg'
import { useNavigate } from 'react-router-dom'

const Card = ({ personaje }) => {
    const navigate = useNavigate()
    const { image, name, status, id } = personaje
    return (
        <div className="card">
            <div onClick={() => navigate(`/info/${id}`)}>
                <img src={image} alt="" />

            </div>


            <div className='agregar-favorito'>
                <h3>{name}</h3>
                <a href="">Agregar Favorito</a>
            </div>
        </div>


    )
}

export default Card
