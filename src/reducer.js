export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket)=> basket?.reduce((amount, item) =>item.price + amount, 0);

const reducer = ( state, action ) => {
    // console.log(action);
    switch(action.type){
        // Every time an action is dispatched it will show how the data layer will look like and here there are two actions ADD TO BASKET and REMOVE FROM BASKET..... After the return of each action it will show how the data layer will look like
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            // Logic for adding item to the basket
            return {
                ...state,
                basket: [ ...state.basket, action.item], //This returns the value of the current state (daatalayer) then override the value of the basket (bacuse of the action dispatched) with new value
            };

        case 'REMOVE_FROM_BASKET':
            // logic for remoivng from the basket

            // Here we Cloned the basket
            let newBasket = [...state.basket];

            // we check the particular item is present in the basket or not through the ID
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if ( index >= 0 ){
                // Items Exists in the basket remove it...
                newBasket.splice( index, 1) //Go to the index 1 ib the basket then splice (cut) it
            }
            else {
                // console.warn(
                //     'Cant Remove Product (id: $(action.id)) as its not in the basket';
                // );
            }
            return { ...state, basket: newBasket};

        default:
        return state;
    }
};
export default reducer; 