import { ACTIONS, initialState, cartReducer, } from "../cartReducer/cartReducer";
import { useReducer} from "react";
import { CartContext } from "./cartContext";

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItemToCart = (item) => {
        dispatch({ type: ACTIONS.ADD_ITEM, payload: item });
    };

    const updateQuantity = (itemId, qtyChange) => {
        dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { id: itemId, qtyChange }});
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
            updateQuantity,
            removeItemFromCart, 
            getTotalPrice,
            getTotalQty,
            getItemById 
        }}>
            {children}
        </CartContext.Provider> 
    )
}