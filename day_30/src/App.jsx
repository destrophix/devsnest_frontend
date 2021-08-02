import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./App.css";

import Cart from "./components/Cart";

import { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/" className="links">
                AniCart
              </Link>
            </Navbar.Brand>
            <Cart
              show={show}
              toggleShow={toggleShow}
              handleClose={handleClose}
              name="cart"
            ></Cart>
          </Container>
        </Navbar>
      </div>

      <Switch>
        <Route exact path="/" component={Products}></Route>
        <Route exact path="/:id">
          <ProductDetails show={show} setShow={setShow} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
