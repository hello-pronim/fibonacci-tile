import classnames from "classnames";
import Text from "@components/common/typography";
import styles from "./styles.module.scss";
import CheckMarkIcon from "@components/icons/checkmark";
import CloseIcon from "@components/icons/close";
import { useAppContext } from "@contexts/AppContext";

export default function ColourSchemeFilter({}) {
  const { state, dispatch } = useAppContext();
  const handleFilter = (value) => {
    dispatch({
      type: "SELECT_PRODUCT_FILTER",
      filter: {
        type: 'colourSchemes',
        value
      },
    });
  }
  const schemeArray = [
    { label: "Warm", value: "warm", colour: "#DEDCDC" },
    { label: "Cool", value: "cool", colour: "#DEE2E4" },
    { label: "Blacks", value: "blacks", colour: "#666366", textColour: "#FFF" },
    { label: "Greys", value: "greys", colour: "#F0EBE7" },
    { label: "Whites", value: "whites", colour: "#F7F6F5" },
    { label: "Earthy", value: "earthy", colour: "#E7DBC9" },
    { label: "Pinks", value: "pinks", colour: "#F1E1DA" },
    { label: "Blues", value: "blues", colour: "#E2E9EC" },
    { label: "Oranges", value: "oranges", colour: "#EFCDB4" },
  ];

  return (
    <div className={classnames(styles.colorSchemesContainer, {[styles.mobileColorScheme] : state.isMobileFilterActive})}>
      {!state.isMobileFilterActive && (
      <div
        className={classnames(
          styles.productFilterItem,
          styles.productFilterItemTitle
        )}
      >
        <Text as="h3" variant="Body-Regular">
          Refine your <br/> colour schemes
        </Text>
      </div>
      )}
      <div className={styles.colorSchemeItemsContainer}>
        {schemeArray.map((scheme, index) => (
          <div
            key={`colour-${index}`}
            className={classnames(styles.colourScheme, {[styles.filterInnerMobile]: state.isMobileFilterActive})}
            style={{
              background: scheme.colour,
            }}
            onClick={()=> handleFilter(scheme.value)}
          >
            {!state.isMobileFilterActive && state.filter.colourSchemes.indexOf(scheme.value) !== -1 && (
              <CheckMarkIcon color={scheme.textColour} />
            )}  
            <Text variant="Body-Small" color={scheme.textColour}>
              {scheme.label}
            </Text>
            {state.isMobileFilterActive && state.filter.colourSchemes.indexOf(scheme.value) !== -1 && (
              <CheckMarkIcon color={scheme.textColour} />
            )}  
          </div>
        ))}
      </div>
      <div onClick={()=> handleFilter("clear")} className={styles.clearFilter}>
        Clear Filter <CloseIcon color={"#0D0D0D"}/>
      </div>
    </div>
  );
}
