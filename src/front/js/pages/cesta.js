import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ItemDetails from "../component/cesta/ItemDetails.jsx";
// Importo componente de los botones de paypal
import { PaypalCheckoutButton } from "../component/PaypalCheckoutButton";
import "../../styles/cesta.css";

export const Cesta = () => {
  const { store, actions } = useContext(Context);

  const product = {
    description: "Lo vamos a conseguir",
    price: 10.0,
  };

  return (
    <>
      {/*  <div className="container"> */}
      <div className="header-cesta d-flex justify-content-center">
        <h1>Cesta de la Compra</h1>
      </div>
      <div className="row row-cols-md-2">
        <div className="column-1 col-md-8">
          <div className="decorative-line col-6 position-relative ">
            <div className="col-md d-flex flex-nowrap">
              <h6 className="item-number">1</h6>&nbsp;
              <h6 className="item-text">articulo</h6>
            </div>
            <div className="decorative-line position-absolute top-50 start-100 translate-middle">
              <h6 className="item-text2">Subtotal</h6>
            </div>
          </div>
          <ItemDetails />
          <ItemDetails />
          <ItemDetails />
        </div>
        <div className="column-2 col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="card-title">RESUMEN DEL PEDIDO</p>
              <div className="card-text row">
                <div className="card-item col mt-1">
                  <p>Subtotal</p>
                </div>
                <div className="card-item2 col d-flex justify-content-end">
                  <p>250€</p>
                </div>
              </div>
              <div className="card-text row">
                <p className="card-item col">Envio Express</p>
                <span className="card-item2 col d-flex justify-content-end">
                  Gratis
                </span>
              </div>
              <div className="card-text row">
                <p className="card-item3">Introduce tu código de descuento</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-text row">
                <div className="total-pedido col mt-1">
                  <p>Total Pedido</p>
                </div>
                <div className="total-pedido-precio col d-flex justify-content-end">
                  <p>250€</p>
                </div>
                <div>
                  <p className="total-pedido-iva">Iva Incl.</p>
                </div>
              </div>
            </div>
            {/* <div className="d-flex justify-content-center"><Link to="/pedido" className="btn-finalizar-pedido d-flex justify-content-center"><p className="text-btn-finalizar-pedido">FINALIZAR PEDIDO</p></Link> */}
            <div className="paypal-button-container">
              <PaypalCheckoutButton product={product} />
            </div>
          </div>
          <div className="col-md d-flex justify-content-center">
            <Link
              to="/producto"
              className="btn-continuar-comprando d-flex justify-content-center"
            >
              <p className="text-btn-continuar-comprando">
                CONTINUAR COMPRANDO
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Cesta;