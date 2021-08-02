import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Product = ({ id, title, price, description, image }) => {
  return (
    <Link to={`/${id}`} className="links">
      <Card className="card">
        <img src={image} alt="product" style={{ margin: "auto" }}></img>
        <h4>{title.slice(0, 20)}</h4>
        <p>{description.slice(0, 50)}</p>
        <h5>Price: ₹{price}</h5>
      </Card>
    </Link>
  );
};

export default Product;

//
