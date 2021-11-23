export const initialState = {
  selectedProducts: [],
  filter: {},
  productDisplayMode: "grid",
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "INIT_STORED": {
      console.log("init", action);
      return action.value;
    }
    case "PRODUCT_DISPLAY_MODE": {
      return {
        ...state,
        productDisplayMode: action.value,
      };
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
