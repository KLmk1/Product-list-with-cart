import { useReducer } from "react";
import { cartReducer, initialState, ACTIONS } from "../cartReducer/cartReducer";
import { CartContext } from "./cartContext";

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItemToCart = (item) => {
        dispatch({ type: ACTIONS.ADD_ITEM, payload: item });
    };

    const updateQuantity = (item, qtyChange) => {
        // Если qtyChange > 0 и товара нет, добавляем его
        const exists = state.items.find(i => i.id === item.id);
        if (!exists && qtyChange > 0) {
        addItemToCart({ ...item, qty: qtyChange });
        return;
        }

        // Если есть, просто обновляем количество
        dispatch({
        type: ACTIONS.UPDATE_QUANTITY,
        payload: { id: item.id, qtyChange }
        });
    };
    const removeItemFromCart = (item) => {
        dispatch({ type: ACTIONS.REMOVE_ITEM, payload: item });
    };

    const getTotalPrice = () =>
        state.items.reduce((total, item) => total + item.price * item.qty, 0);

    const getTotalQty = (id) => {
        const found = state.items.find(item => item.id === id);
        return found ? found.qty : 0;
    };

    return (
        <CartContext.Provider value={{
            cart: state,
            addItemToCart,
            updateQuantity,
            removeItemFromCart,
            getTotalPrice,
            getTotalQty,
        }}>
            {children}
        </CartContext.Provider>
    );
}
