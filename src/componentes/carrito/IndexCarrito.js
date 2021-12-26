import "./IndexCarrito.scss";
import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BanderaCategoria } from "../productos/BanderaCategoria";
import {
  pay_product_action,
  remove_product_action,
} from "../../redux/actions/action";
import { ButtonAgregar } from "../buttonAgregar/ButtonAgregar";
import { SweetAlert } from "../../util/SetupAlert";
import { ItemCarrito } from "./ItemCarrito";

const IndexCarrito = () => {
  const productos = useSelector((state) => state.reducer_product.product);
  const dispatch = useDispatch();

  const acumuladorPrecios = () => {
    let result = 0;
    productos.map((prod) => (result += prod.precioFinal * prod.cantidad));
    return result;
  };
  const gratitude = () => {
    SweetAlert("success", "Muchas gracias por su compra");
    dispatch(pay_product_action());
  };
  return (
    <Fragment>
      <BanderaCategoria categoria="Carrito" />
      <section className="carrito-productos" style={{ minHeight: "70vh" }}>
        {productos.length > 0 &&
          productos.map((el) => <ItemCarrito key={el.id} elemento={el} />)}
        {productos.length > 0 ? (
          <>
            <article className="item-total">
              <div style={{ width: "80%" }}>TOTAL</div>
              <div style={{ width: "20%" }}>$ {acumuladorPrecios()}</div>
            </article>
            <article className="item-total" style={{ marginTop: "10px" }}>
              <div style={{ width: "80%" }}></div>
              <div style={{ width: "20%" }}>
                <ButtonAgregar
                  onClick={gratitude}
                  style={{ padding: "10px", width: "90%", fontSize: "1em" }}
                >
                  Pagar
                </ButtonAgregar>
              </div>
            </article>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            No hay items en el carrito. Agrega productos para visualizarlos en
            esta seccion.
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default IndexCarrito;
