import "./cart.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddAddress, DeleteCart, QuantityChange } from "../redux/action";

function Cart() {
  const cartItemsStore = useSelector((state) => {
    return state.productsReducer.cart;
  });
  const savedAddressStore = useSelector((state) => {
    return state.addressReducer.savedAddress;
  });
  const dispatch = useDispatch();

  var total = 0;
  function calculateTotal() {
    cartItemsStore.forEach((element) => {
      total = total + element.price * element.quantity;
    });
  }
  calculateTotal();

  const [showAddAddress, setShowAddAddress] = useState(savedAddressStore.length > 0 ? false : true);
  const [userDetails, setuserDetails] = useState({ name: "", address: "", number: '' });

  const handleUserChange = (e, userDetail) => {
    var temp;
    if (userDetail === "name") {
      temp = { ...userDetails, name: e.target.value };
    } else if (userDetail === "address") {
      temp = { ...userDetails, address: e.target.value };
    } else if (userDetail === "number") {
      temp = { ...userDetails, number: e.target.value };
    }
    setuserDetails(temp);
  };

  return (
    <div className="container">
      <h1 className="mb-5 heading">Shopping cart</h1>
      <div className="cart">
        <div className="addressSection">
          <div className={savedAddressStore.length > 0 ? "addressList" : "d-none"}>
            <h4>Saved Address</h4>
            <div className="saveAddressList">
              {savedAddressStore.map((address, index) => {
                return (
                  <div role="button" className="savedAddress" key={index}
                    onClick={() => {
                      setuserDetails(address);
                      setShowAddAddress(true);
                    }}>
                    <p>Address: {address.address}</p>
                    <p>Name: {address.name}</p>
                    <p>Phone Number: {address.number}</p>
                  </div>
                );
              })}
            </div>
            <button className={!showAddAddress ? "order btn btn-primary" : "d-none"} onClick={() => { setShowAddAddress(true); }}>Add New Address</button>
          </div>
          <div className={showAddAddress ? "customer-details" : "d-none"}>
            <label className="address"> Address</label>
            <textarea className="d-block" type="text" value={userDetails.address} onChange={(e) => { handleUserChange(e, "address"); }}></textarea>
            <label className="name">Name</label>
            <input className="d-block" type="text" value={userDetails.name} onChange={(e) => { handleUserChange(e, "name"); }}></input>
            <label className="phNumber">Phone Number</label>
            <input className="d-block" type="text" value={userDetails.number} onChange={(e) => { handleUserChange(e, "number"); }}></input>
            <button className="order btn btn-primary" onClick={() => { dispatch(AddAddress(userDetails)); setShowAddAddress(false) }}>Save Address</button>
            <Link to={"/thank-you"}>
              <button className="order btn btn-primary mx-3" onClick={() => { dispatch(AddAddress(userDetails)) }}>Order</button>
            </Link>
          </div>
        </div>
        <div className="product-list">
          <h4>Cart Items</h4>
          {cartItemsStore &&
            cartItemsStore.map((product) => {
              return (
                <div className="pcard" key={product.id}>
                  <img alt="product_iamge" src={product.image} />
                  <div className="card-details">
                    <h5 className="card-title">{product.name}</h5>
                  </div>
                  <div className="card-content">
                    <p> ₹ {product.price}</p>
                    <input type="number" name="number" min={1} value={product.quantity}
                      onChange={(e) => {
                        dispatch(QuantityChange({ id: product.id, value: Number(e.target.value) }));
                        calculateTotal();
                      }}
                    />
                    <i role="button" className="bi bi-trash mx-2 position-absolute" onClick={() => { dispatch(DeleteCart(product)) }}></i>
                    <p className="mt-3"> Total amount: ₹{product.price * product.quantity}</p>
                  </div>
                </div>
              );
            })}
          <h3>Subtotal: ₹ {total}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
