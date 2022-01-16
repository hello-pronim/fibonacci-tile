export const initialState = {
  selectedProducts: [],
  filter: {
    searchText: null,
    products: "all",
    colourSchemes: [],
    sortBy: "featured",
  },
  productDisplayMode: "grid",
  loading: true,
  isMobileFilterActive: false,
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
          if(value !== "clear") {
            if (existingColourSchemes.indexOf(value) === -1) {
              newColorSchemes = [...state.filter.colourSchemes, value];
            } else {
              newColorSchemes = state?.filter?.colourSchemes.filter((item) => {
                return item !== value;
              });
            }
          }else {
            newColorSchemes = []
          }
          return {
            ...state,
            filter: {
              ...state.filter,
              [action.filter.type]: newColorSchemes,
            },
          };
        }
        if(action?.filter?.type === "searchText" && action?.filter?.value ==="clear") {
          return {
            ...state,
            filter: {
              ...state.filter,
              [action.filter.type]: null,
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
    case "SET_MOBILE_FILTER": {
      console.log("value", action.value)
      return {
        ...state,
        isMobileFilterActive: action.value,
      };
    }
  }
};
