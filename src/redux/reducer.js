import { combineReducers } from "redux";
import { ADD_CART, QUANTITY_CHANGE, DELETE_CART, ADD_ADDRESS } from "./action";
import puma from "../assets/puma.jpg";
import adidas from "../assets/adidas.jpg";
import nike from "../assets/nike.jpg";
import hrx from "../assets/hrx.jpg";
import wrogn from "../assets/wrogn.jpg";

const initProduct = {
  cart: [],
  productListStore: [
    { id: 1, name: "Puma", price: 999, quantity: 1, image: puma, description: "Flair 2 Lace-Up Running Shoes" },
    { id: 2, name: "Adidas", price: 999, quantity: 1, image: adidas, description: "ULTRABOOST 5.0 X MARVEL BLACK PANTHER SHOES" },
    { id: 3, name: "Nike", price: 999, quantity: 1, image: nike, description: "Nike Air Max 90 SE" },
    { id: 4, name: "HRX ", price: 999, quantity: 1, image: hrx, description: "Men Grey Metagrip 1.0 Running Shoes" },
    { id: 5, name: "Wrogn", price: 999, quantity: 1, image: wrogn, description: "Wrogn Men Grey Sneakers" }
  ]
};

const initAddress = {
  savedAddress: []
}

function productsReducer(state = initProduct, action) {
  switch (action.type) {
    case ADD_CART:
      if (state.cart.length) {
        let exists = false;
        state.cart.forEach((item) => {
          if (item.id === action.payload.id) {
            exists = true;
          }
        });
        if (!exists) {
          state.cart.push(action.payload);
        }
      } else {
        state.cart.push(action.payload);
      }
      return {
        ...state,
      };

    case QUANTITY_CHANGE:
      const temp1 = [...state.productListStore];
      temp1.forEach((product) => {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.value;
        }
      });
      const temp2 = [...state.cart];
      temp2.forEach((product) => {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.value;
        }
      });

      return {
        ...state,
        cart: [...temp2],
        productListStore: [...temp1],
      };

    case DELETE_CART:
      const temp3 = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      const temp4 = [...state.productListStore];
      temp4.forEach((product) => {
        if (product.id === action.payload.id) {
          product.quantity = 1;
        }
      });

      return {
        ...state,
        productListStore: [...temp4],
        cart: [...temp3],
      };

    default:
      return state;
  }
}

function addressReducer(state = initAddress, action) {
  switch (action.type) {
    case ADD_ADDRESS:
      let temp5 = [...state.savedAddress]
      temp5.push(action.payload);
      return {
        ...state,
        savedAddress: temp5
      }
    default:
      return state;
  }

}

const ShopApp = combineReducers({
  productsReducer,
  addressReducer
});

export default ShopApp;
