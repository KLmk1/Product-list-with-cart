import { ACTIONS, initialState, cartReducer, } from "../cartReducer/cartReducer";
import { useReducer} from "react";
import { CartContext } from "./cartContext";

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

    const getTotalPrice = () =>
        state.items.reduce((total, item) => total + item.price * item.qty, 0);

    const getTotalQty = () =>
        state.items.reduce((total, item) => total + item.qty, 0);

    const getItemById = (id) =>
        state.items.find(item => item.id === id);

    return (
        <CartContext.Provider value={{ 
            cart: state, 
            addItemToCart, 
            minusItemFromCart, 
            removeItemFromCart, 
            getTotalPrice,
            getTotalQty,
            getItemById 
        }}>
            {children}
        </CartContext.Provider> 
    )
}