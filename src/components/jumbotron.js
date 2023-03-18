import { Link } from "react-router-dom";
const Jumbotron = () => {

    return (

        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Bienvenido a AdoptaPet</h1>
            <p className="col-md-8 fs-4">AdoptaPet es una fundación dedicada al rescate, cuidado y adopción de mascotas en situación de abandono o maltrato. Su principal objetivo es brindar un hogar amoroso y seguro a los animales mientras se les busca un hogar permanente y responsable. Con un equipo altamente comprometido y apasionado, AdoptaPet trabaja incansablemente para mejorar la calidad de vida de los animales, educar a la comunidad sobre la importancia de la adopción responsable y fomentar la cultura de la protección animal.</p>
            <Link
                to="/info"
                className="btn btn-primary btn-lg" type="button">Sobre nosotros...</Link>
        </div>

    )
}
export default Jumbotron;

