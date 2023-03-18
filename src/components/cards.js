import { Link } from "react-router-dom";

const Cards = () => {

    return (

        <div
            style={{ borderRadius: '5px' }}
            className="text-center shadow-lg m-5 p-4 bg-white">
            <h1 className="pb-4">Sección adoptables!</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
                        <div class="card-body">
                        <h5 className="card-title">Perros</h5>
                            <p className="card-text">Acá encontrarás todos los perros en adopción.</p>
                        </div>
                        <div className="card-footer">
                            <Link 
                            to="/dogs"
                            className="btn btn-primary">Leer más...</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://picsum.photos/id/237/200/300" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Gatos</h5>
                            <p className="card-text">Acá encontrarás todos los gatos en adopción.</p>
                        </div>
                        <div className="card-footer">
                        <Link 
                        to="/cats"
                        className="btn btn-primary">Leer más...</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Otros</h5>
                            <p className="card-text">Acá encontrarás todos los animales (menos perros y gatos) en adopción.</p>
                        </div>
                        <div className="card-footer">
                        <Link 
                        to="/others"
                        className="btn btn-primary">Leer más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Cards;