import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faAddressCard, faRightToBracket, faHouse, faInfo } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

  const pawn = <FontAwesomeIcon icon={faPaw} />
  const register = <FontAwesomeIcon icon={faAddressCard} />
  const login = <FontAwesomeIcon icon={faRightToBracket} />

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <div class="dropdown">
            <button className="btn btn-primary dropdown-toggle border border-dark shadow-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            AdoptaPet {pawn}
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Inicio</Link></li>
              <li><Link className="dropdown-item" to="/login">Ingresa</Link></li>              
              <li><Link className="dropdown-item" to="/dogs">Perros</Link></li>              
              <li><Link className="dropdown-item" to="/cats">Gatos</Link></li>              
              <li><Link className="dropdown-item" to="/others">Otras mascotas</Link></li>              
            </ul>
          </div>
          <div>
            <Link className="nav-link text-white" to="/Login">{login} Ingresa</Link>
          </div>


        </div>
      </nav>
    </div>
  )
}
export default NavBar;