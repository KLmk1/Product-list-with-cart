export const ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    REMOVE_ITEM: 'REEMOVE_ITEM',
}

export const initialState = { items: [] };

export function cartReducer(state, action) {        
    const item = action.payload;
    switch (action.type) {
        case ACTIONS.ADD_ITEM: {
            const exist = state.items.find( i => i.id === item.id );
            if (exist) {
                return {
                    ...state,
                    items: state.items.map(i => 
                        i.id === item.id 
                        ? { ...i, qty: i.qty + (item.qty || 1)} 
                        : i
                    ),
                };
            } else {
                return {...state, items: [...state.items, {...item, qty: item.qty || 1}]}
            }
        }
    case ACTIONS.UPDATE_QUANTITY: {
        const { id, qtyChange } = action.payload;
        return {
            ...state,
            items: state.items
            .map((i) => (i.id === id ? { ...i, qty: i.qty + qtyChange } : i))
            .filter((i) => i.qty > 0),
        };
        }
        case ACTIONS.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter( i =>  i.id !== item.id)
            }
    }
}
