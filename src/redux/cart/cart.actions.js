export const cartActionTypes = () => ({ 
	type: 'TOGGLE_CART',
})

export const addItem = (item) => ({ 
	type: 'ADD_ITEM',
	payload: item
})

