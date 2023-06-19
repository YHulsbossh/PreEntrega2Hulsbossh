import { Link, useParams } from "react-router-dom";

const Thanks = () => {
  const { orderId } = useParams();

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <div className="alert alert-danger p-5" role="alert">
            <h1 className="fs-1 text">Gracias por tu Compra!</h1>
            <p>Tu Orden de Compra es: <b>{orderId}</b></p>
            <p>
              <Link to={"/"} className="btn boton mt-3">Volver al Inicio </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;