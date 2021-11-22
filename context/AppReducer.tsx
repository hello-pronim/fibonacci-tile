export const initialState = {
    selectedProducts: [],
    filter: {}
 };
 export const AppReducer = (state, action) => {
    switch (action.type){
       case "SELECT_PRODUCTS": {
          return {
             ...state,
             selectedProducts: [
                 ...state.selectedProducts,
                 ...action.products
             ],
          };
       }
       case "REMOVE_PRODUCTS": {
        return {
           ...state,
           selectedProducts: [
               ...state.selectedProducts,
               ...action.products
           ],
        };
     }
    }
 };