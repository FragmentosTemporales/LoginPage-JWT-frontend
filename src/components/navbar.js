import { Link } from "react-router-dom";

const NavBar = () => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
        <div class="dropdown">
            <button className="btn btn-primary dropdown-toggle border border-dark shadow-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/home">Home</Link></li>
              <li><Link className="dropdown-item" to="/register">Register</Link></li>
              <li><Link className="dropdown-item" to="/login">Login</Link></li>
            </ul>
          </div>
          <Link className="nav-link text-white" to="/Home">Home</Link>
          <Link className="nav-link text-white" to="/Register">Register</Link>
          <Link className="nav-link text-white" to="/Login">Login</Link>
          
        </div>
      </nav>
    </div>
  )
}
export default NavBar;