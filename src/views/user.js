import { Context } from "../store/context";
import React, { useContext } from "react";

const User = () => {
  const { store } = useContext(Context);
  const { loginUser, user_id, email } = store;
  const { name, last_name, phone } = loginUser;

  return (
    <div
      style={{ borderRadius: "5px", minHeight: "100vh" }}
      className="shadow-lg mt-5 mb-5 p-5 bg-white container"
    >
      <div className="row col-12">
        <h1>Información personal: </h1>
        <div id="left" className="col-6 pt-4">
          <h4>Nombre:</h4>
          <p>
            {name} {last_name}
          </p>
          <h4>Teléfono:</h4>
          <p> {phone}</p>
        </div>
        <div id="right" className="col-6 pt-4">
          <h4>Correo:</h4>
          <p> {email}</p>
          <h4>User id:</h4>
          <p> {user_id}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
