import "./Product.css";
import { Link } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, QuantityChange } from "../redux/action";

const Product = () => {
  const productListStore = useSelector((state) => {
    return state.productsReducer.productListStore;
  });

  const dispatch = useDispatch();
  return (
    <div className="all-products">
      {productListStore &&
        productListStore.map((product) => {
          return (
            <div className="pcard" key={product.id}>
              <div className="grid-content">
                <Link to={`/product/${product.id}`}>
                  <img alt="product_image" src={product.image} />
                  <h5 className="card-title">{product.name}</h5>
                  <div className="card-details"></div>
                </Link>
              </div>
              <div className="list-content">
                <Link to={`/product/${product.id}`}>
                  <img alt="product_image" src={product.image} />
                  <div className="card-details">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-description">{product.description}</p>
                  </div>
                </Link>
              </div>
              <div className="card-content">
                <p> ₹ {product.price}</p>
                <input type="number" name="number" min={1} value={product.quantity}
                  onChange={(e) => {
                    dispatch(
                      QuantityChange({
                        id: product.id,
                        value: Number(e.target.value),
                      })
                    );
                  }}
                />
                <div className="card-action">
                  <Link className="btn btn-info" to={`/cart`} onClick={() => { dispatch(AddCart(product)) }}>Checkout</Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
