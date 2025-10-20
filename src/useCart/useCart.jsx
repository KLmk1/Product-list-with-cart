import { CartContext } from "../cartContext/cartContext.jsx";
import { useContext } from "react";

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    };

    return context;
}

// This custom hook provides access to the cart context, allowing components to interact with the cart state and dispatch actions.
// It have 4 main functionalities:
// 1. Accessing the current cart state.
// 2. Adding an item to the cart.
// 3. Decreasing the quantity of an item in the cart.
// 4. Removing an item from the cart.