import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark d-flex justify-content-center">
                <div>
                    <Link 
                    to="https://github.com/FragmentosTemporales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warning">Copyrigth © Fragmentos Temporales</Link>
                </div>
            </nav>
        </div>
    )
}
export default Footer;