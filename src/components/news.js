import { Link } from "react-router-dom";

const News = () => {

  return (
    <div style={{ borderRadius: '5px' }} className="text-center shadow-lg m-5 p-4 bg-white">
      <h1>¡Las últimas noticias!</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Familia feliz con Cachupín</h5>
            </div>
            <div className="card-footer">
              <Link to="/card" className="btn btn-primary">Leer más...</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Adopción de Cachupín</h5>
            </div>
            <div className="card-footer">
              <Link to="/card" className="btn btn-primary">Leer más...</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rescate de Cachupín</h5>
            </div>
            <div className="card-footer">
              <Link to="/card" className="btn btn-primary">Leer más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;