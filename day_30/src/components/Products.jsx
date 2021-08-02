/* eslint-disable */
import Product from "./Product";
import { useEffect } from "react";
import { fetchProducts } from "../slices/productListSlice";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  if (!products.length) dispatch(fetchProducts());
  return (
    <div className="products">
      {products.length ? (
        products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          );
        })
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Products;
