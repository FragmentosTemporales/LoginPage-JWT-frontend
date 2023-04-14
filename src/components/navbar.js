import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <Link to="/" className="text-white text-decoration-none"><h3>Test Page</h3></Link>
          <div class="dropdown">
            <button className="btn btn-primary dropdown-toggle border border-dark shadow-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Options
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Home</Link></li>
              <li><Link className="dropdown-item" to="/login">Login</Link></li>
              <li><Link className="dropdown-item" to="/user">My profile</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar;