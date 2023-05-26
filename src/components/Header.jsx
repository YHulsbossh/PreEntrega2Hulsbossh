import NavBar from "./NavBar";
import Search from "./Search";
import Logo from "../images/logo.jpg"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <div className="container-fluid">
            <div className="row p-2 align-items-center text-center">
                <div className="col-md-4" width={100}>
                    <Search />
                </div>
                <div className="col-md-4">
                   <Link to="/"><img src={Logo} alt="Logo" width={150}/></Link> 
                </div>
                <div className="col-md-4">
                    <Link to="#" className="text-dark text-decoration-none fs-5 text me-3">CREAR CUENTA</Link> | <Link to="#" className="text-dark text-decoration-none fs-5 text ms-3">INICIAR SESIÓN</Link> 
                </div>
            </div>
            <div className="row align-items-center p-3" id="barra">
                    <div className="col-md-12">
                        <NavBar />
                    </div> 
            </div>
        </div>
        
    )
}

export default Header;