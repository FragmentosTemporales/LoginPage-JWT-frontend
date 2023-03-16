import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    
    const pawn = <FontAwesomeIcon icon={faPaw} />
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-center">
                <div>
                    <Link 
                    to="/info"
                    className="text-white text-decoration-none">AdoptaPet {pawn} 2023</Link>
                </div>
            </nav>
        </div>
    )
}
export default Footer;