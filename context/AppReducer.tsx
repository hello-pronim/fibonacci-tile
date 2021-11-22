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
       case "LAYOUT_MODE": {
         return {
            ...state,
            layoutMode: action.value,
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