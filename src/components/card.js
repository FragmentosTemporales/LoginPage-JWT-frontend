import { Link } from "react-router-dom";

const Card = () => {

    return (

        <div
            style={{ borderRadius: '5px' }}
            className="text-center shadow-lg m-5 p-4 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <div className="card h-100">
                        <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
                    </div>
                    </div>
                    <div className="col-8">
                        <h1>Nombre:</h1>
                        <h4>Edad:</h4>
                        <h4>Género:</h4>
                        <h4>Tamaño:</h4>
                        <p>Breve descripción de la mascota</p>
                        <Link 
                        to="/others"
                        className="btn btn-primary">Mira su ubicación</Link>
                    </div>
                </div>                                
            </div>
        </div>

    )
}
export default Card;