import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
      <div className="container-fluid ">
        <div className="row bg-danger-subtle fs-4 text">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active text-dark" aria-current="page" to="/">INICIO</Link>
                </li>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle text-dark" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PRODUCTOS </Link>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="/category/Sets">SETS</Link></li>
                        <li><Link class="dropdown-item" to="/category/Conjuntos">CONJUNTOS</Link></li>
                        <li><Link class="dropdown-item" to="/category/Bodys">BODYS</Link></li>
                        <li><Link class="dropdown-item" to="/category/Packs">PACKS</Link></li>
                    </ul>                    
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="#">COMO COMPRAR</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="#">BLOG</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="#">CONTACTO</Link>
                </li>
                <li className="nav-item">
                    <CartWidget />
                </li>
            </ul>
        </div>
      </div>
    )
}

export default NavBar;