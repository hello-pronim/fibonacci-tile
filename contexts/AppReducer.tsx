export const initialState = {
  selectedProducts: [],
  confirmedProducts: [],
  filter: {
    searchText: "",
    products: "all",
    colourSchemes: [],
    sortBy: "featured",
  },
  productDisplayMode: "grid",
  loading: true,
  isMobileFilterActive: false,
  checkoutStep: 1,
  openDrawer: false,
  activeDrawerTab: "cart",
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
          if (value !== "clear") {
            if (existingColourSchemes.indexOf(value) === -1) {
              newColorSchemes = [...state.filter.colourSchemes, value];
            } else {
              newColorSchemes = state?.filter?.colourSchemes.filter((item) => {
                return item !== value;
              });
            }
          } else {
            newColorSchemes = [];
          }
          return {
            ...state,
            filter: {
              ...state.filter,
              [action.filter.type]: newColorSchemes,
            },
          };
        }
        if (
          action?.filter?.type === "searchText" &&
          action?.filter?.value === "clear"
        ) {
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
            [action.filter.type]: {
              value,
              label: action.filter.label,
            },
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
          confirmedProducts: newSelectedProducts ? newSelectedProducts : [],
        };
      } else {
        return {
          ...state,
          selectedProducts: [...state.selectedProducts, action.product],
        };
      }
    }
    case "TOGGLE_CONFIRM_PRODUCT_SELECTION": {
      // check if product is in confirmedProducts
      const checkConfirmProductSelected =
        state.confirmedProducts &&
        state.confirmedProducts.findIndex((sp) => sp.id === action.product.id);
      if (checkConfirmProductSelected !== -1) {
        const newConfirmSelectedProducts =
          state.confirmedProducts &&
          state?.confirmedProducts.filter((sp) => sp.id !== action.product.id);
        return {
          ...state,
          confirmedProducts: newConfirmSelectedProducts
            ? newConfirmSelectedProducts
            : [],
        };
      } else {
        return {
          ...state,
          confirmedProducts: [...state.confirmedProducts, action.product],
        };
      }
    }
    case "SET_MOBILE_FILTER": {
      return {
        ...state,
        isMobileFilterActive: action.value,
      };
    }
    case "SET_CHECKOUT_STEP": {
      return {
        ...state,
        checkoutStep: action.value,
      };
    }
    case "OPEN_DRAWER": {
      return {
        ...state,
        openDrawer: action.value,
      };
    }
    case "SET_ACTIVE_DRAWER_TAB": {
      return {
        ...state,
        activeDrawerTab: action.value,
      };
    }
  }
};
