import products from "../Data/Data"

const initialState = {
    products,
    selectedProduct :{}
}
export const productReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case 'product/TRY_CLOTHES':{
            const selectedProduct={...state.selectedProduct};
            selectedProduct[payload.type] = payload.img;
            return {...state,selectedProduct};
        }
        case "category/RESET":{
            state.selectedProduct='';
            return {...state}
        }
        default:
            return state;
    }
}