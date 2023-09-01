import { Outlet, Link } from "react-router-dom"
import logo from '../img/logo.jpg'


const Layout = () => {
    return (
        <header>
            <div className="navbar">
                <div className="ordenry contenedor">
                    <Link to='/'>
                        <img src={logo} alt="" />

                    </Link>
                    <p>Favorito</p>

                </div>
            </div>
            <Outlet />
        </header>
    )
}

export default Layout
