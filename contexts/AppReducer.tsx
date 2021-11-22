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
    case "SELECT_PRODUCTS": {
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, ...action.products],
      };
    }
    case "UNSELECT_PRODUCTS": {
      const newSelectedProducts = state?.selectedProducts.filter((sp) => {
        return (
          action.products.findIndex((ap) => {
            return sp.id === ap.id;
          }) === -1
        );
      });
      return {
        ...state,
        selectedProducts: newSelectedProducts ? newSelectedProducts : [],
      };
    }
    case "REMOVE_PRODUCTS": {
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, ...action.products],
      };
    }
  }
};
