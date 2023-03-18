import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Cats = () => {

  const fav = <FontAwesomeIcon icon={faHeart} />

  return (
    <div style={{ borderRadius: '5px' }} className="text-center shadow-lg m-5 p-4 bg-white">
      <h1>¡Sección gatitos!</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Gatos</h5>
              <p className="card-text">Acá encontrarás todos los Gatos en adopción.</p>
            </div>
            <div className="p-2 d-flex justify-content-between">
              <Link to="/card" className="btn btn-primary">Leer más...</Link>
              <button
                to="#"
                className="btn btn-danger"
              >{fav}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cats;