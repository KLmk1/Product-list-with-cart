import { ACTIONS, initialState, cartReducer, } from "../cartReducer/cartReducer";
import { createContext, useReducer} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItemToCart = (item) => {
        dispatch({ type: ACTIONS.ADD_ITEM, payload: item });
    };

    const minusItemFromCart = (item) => {
        dispatch({ type: ACTIONS.MINUS_ITEM, payload: item });
    };

    const removeItemFromCart = (item) => {
        dispatch({ type: ACTIONS.REMOVE_ITEM, payload: item });
    };

    return (
        <CartContext.Provider value={{ cart: state, addItemToCart, minusItemFromCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider> 
    )
}