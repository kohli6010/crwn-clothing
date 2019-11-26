export const cartActionTypes = () => ({ 
	type: 'TOGGLE_CART',
})

export const addItem = (item) => ({ 
	type: 'ADD_ITEM',
	payload: item
})

export const removeItem = (item) => ({ 
	type: 'REMOVE_ITEM',
	payload: item
})