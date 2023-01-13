import buttonArray from "../Data/buttonArray"
const initialState = {
    buttonArray,
    selectedProduct : "topclothes"
}
export const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "category/SET_SELECTED_PRODUCT": {
            state.selectedProduct=payload
            return { ...state };
        }
       
        default:
            return state;
    }
}