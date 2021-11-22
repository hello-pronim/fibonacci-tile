export const initialState = {
    selectedProducts: [],
    filter: {},
    productDisplayMode: 'grid'
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
       case "PRODUCT_DISPLAY_MODE": {
         return {
            ...state,
            productDisplayMode: action.value,
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