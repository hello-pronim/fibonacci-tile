export const initialState = {
  selectedProducts: [],
  filter: {
    searchText: null,
    products: 'all',
    colourSchemes: [],
    sortBy: null
  },
  productDisplayMode: "grid",
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "INIT_STORED": {
      return action.value;
    }
    case "PRODUCT_DISPLAY_MODE": {
      return {
        ...state,
        productDisplayMode: action.value,
      };
    }
    case "SELECT_PRODUCT_FILTER": {
      // console.log('action.value', action.filter)
      let value = action.filter.value;
      if(action?.filter?.type && action?.filter?.value ) {
        if(action.filter.type === "colourSchemes"){
            let existingColourSchemes = state.filter.colourSchemes;
            const colourSchemeIndex = state.filter.colourSchemes.indexOf(value);
            if( colourSchemeIndex === -1) {
              existingColourSchemes.push(value)
            }else {
              existingColourSchemes.splice(colourSchemeIndex, 1);
            }
            value = existingColourSchemes;
        }
        return {
          ...state,
          filter: {
            ...state.filter,
            [action.filter.type]: value,
          },
        }
      }
      // return {
      //   ...state,
      //   filter: {...state.filter},
      // };
    }
   
    case "TOGGLE_PRODUCT_SELECTION": {
      // check if product is in selectedProducts
      const checkProductSelected = state.selectedProducts.findIndex(
        (sp) => sp.id === action.product.id
      );
      if (checkProductSelected !== -1) {
        const newSelectedProducts = state?.selectedProducts.filter(
          (sp) => sp.id !== action.product.id
        );
        return {
          ...state,
          selectedProducts: newSelectedProducts ? newSelectedProducts : [],
        };
      } else {
        return {
          ...state,
          selectedProducts: [...state.selectedProducts, action.product],
        };
      }
    }
  }
};
