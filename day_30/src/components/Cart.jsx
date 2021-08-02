import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/productListSlice";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/esm/Button";
import { deleteFromCart } from "../slices/cartListSlice";
import { Cart4 } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";
const Cart = ({ show, toggleShow, handleClose, name }) => {
  const products = useSelector((state) => state.products);
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();
  return (
    <>
      <Button variant="light" onClick={toggleShow} className="me-2">
        <Cart4 />
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll="false"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartProducts.length ? (
            cartProducts.map((id) => {
              return (
                <div key={id} className="cart-card">
                  <img
                    alt="product"
                    src={products[id].image}
                    style={{ height: "70px", width: "80px", margin: "30px" }}
                  ></img>
                  <div>
                    <div>{products[id].title}</div>
                    <div>₹{products[id].price}</div>
                    <br></br>
                    <div>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          dispatch(increment(products[id].id));
                        }}
                      >
                        +
                      </Button>
                      <div className="quantity">{products[id].quantity}</div>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          dispatch(decrement(products[id].id));
                        }}
                      >
                        -
                      </Button>
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => {
                          dispatch(deleteFromCart(products[id].id));
                        }}
                      >
                        <Trash />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Cart is empty.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
