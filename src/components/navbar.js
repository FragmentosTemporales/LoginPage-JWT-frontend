import { Link } from "react-router-dom";

const NavBar = () => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/Register">Register</Link>
          <Link className="nav-link text-white" to="login">Login</Link>
        </div>
      </nav>
    </div>
  )
}
export default NavBar;