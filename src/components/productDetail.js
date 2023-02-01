import "./ProductDetail.scss";
import { useParams, Link } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, QuantityChange } from "../redux/action";

const ProductDetail = () => {
  const { id } = useParams();
  const productListStore = useSelector((state) => {
    return state.productsReducer.productListStore;
  });

  const productSelected = productListStore.filter((item) => {
    return item.id === Number(id);
  })[0];

  const dispatch = useDispatch();
  return (
    <div className="product-list">
      {productSelected && (
        <div className="pcard" key={productSelected.id}>
          <img alt="product_iamge" src={productSelected.image} />
          <div className="card-details">
            <h3 className="card-title">{productSelected.name}</h3>
            <p className="card-description">{productSelected.description}</p>
          </div>
          <div className="card-content">
            <p> ₹ {productSelected.price}</p>
            <input type="number" name="number" min={1} value={productSelected.quantity || 1}
              onChange={(e) => {
                dispatch(
                  QuantityChange({
                    id: productSelected.id,
                    value: Number(e.target.value),
                  })
                );
              }}
            />
            <div className="card-action">
              <Link className="btn" to={`/cart`} onClick={() => { dispatch(AddCart(productSelected)) }}>Proceed to cart</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
