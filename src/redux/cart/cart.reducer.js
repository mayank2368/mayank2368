// import CartItem from "../../components/cart-item/cart-item.component";
// import { removeItemFromCart } from "./cart.actions";
import CartActionTypes from "./cart.types";
import cartActionTypes from "./cart.types";
import { addItemToCart, deleteItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (CartItem) => CartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;
