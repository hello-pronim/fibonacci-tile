export const initialState = {
  selectedProducts: [],
  filter: {
    searchText: null,
    products: "all",
    colourSchemes: [],
    sortBy: null,
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
      if (action?.filter?.type && action?.filter?.value) {
        let value = action.filter.value;
        if (action.filter.type === "colourSchemes") {
          const existingColourSchemes = state?.filter?.colourSchemes
            ? state.filter.colourSchemes
            : [];
          let newColorSchemes;
          if (existingColourSchemes.indexOf(value) === -1) {
            newColorSchemes = [...state.filter.colourSchemes, value];
          } else {
            console.log("here", state?.filter?.colourSchemes, value);
            newColorSchemes = state?.filter?.colourSchemes.filter((item) => {
              return item !== value;
            });
            console.log("newscheme", newColorSchemes);
          }
          return {
            ...state,
            filter: {
              ...state.filter,
              [action.filter.type]: newColorSchemes,
            },
          };
        }
        return {
          ...state,
          filter: {
            ...state.filter,
            [action.filter.type]: value,
          },
        };
      }
      return state;
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
