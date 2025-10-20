export const ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    REMOVE_ITEM: 'REMOVE_ITEM',
};

export const initialState = { items: [] };

export function cartReducer(state, action) {

    switch (action.type) {
        case ACTIONS.ADD_ITEM: {
            const item = action.payload;
            const exist = state.items.find(i => i.id === item.id);
            if (exist) {
                return {
                    ...state,
                    items: state.items.map(i =>
                        i.id === item.id ? { ...i, qty: i.qty + (item.qty || 1) } : i
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...item, qty: item.qty || 1 }],
                };
            }
        }

        case ACTIONS.UPDATE_QUANTITY: {
            const { id, qtyChange } = action.payload;

            if (id == null) {
                return state;
            }

            return {
                ...state,
                items: state.items
                    .map(i =>
                        i.id === id ? { ...i, qty: Math.max(0, (i.qty || 0) + qtyChange) } : i
                    )
                    .filter(i => i.qty > 0),
            };
        }

        case ACTIONS.REMOVE_ITEM: {
            const item = action.payload;
            return {
                ...state,
                items: state.items.filter(i => i.id !== item.id),
            };
        }

        default:
            return state;
    }
    
}
