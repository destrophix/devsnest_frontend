import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { fetchProducts } from "../slices/productListSlice";
import { addToCart } from "../slices/cartListSlice";
import { increment, decrement } from "../slices/productListSlice";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductDetails = ({ show, setShow }) => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products[id - 1];

  const dispatch = useDispatch();
  useEffect(() => {
    if (!products.length) dispatch(fetchProducts());
  }, []);
  return (
    <div>
      {products.length ? (
        <Container style={{ margin: "40px 20px" }}>
          {
            <Row>
              <Col>
                <img
                  alt="product"
                  src={product.image}
                  style={{ height: "400px", width: "350px" }}
                ></img>
              </Col>
              <Col>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h1>₹{product.price}</h1>
                <br></br>
                <div className="btns">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => {
                      dispatch(increment(product.id));
                    }}
                  >
                    +
                  </Button>
                  <div className="quantity">{product.quantity}</div>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => {
                      if (product.quantity !== 1)
                        dispatch(decrement(product.id));
                    }}
                  >
                    -
                  </Button>
                </div>
                <br></br>
                <Button
                  onClick={() => {
                    dispatch(addToCart(product.id));
                    setShow(!show);
                  }}
                >
                  ADD TO CART
                </Button>
              </Col>
            </Row>
          }
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductDetails;
