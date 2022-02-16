import classnames from "classnames";
import Text from "@components/common/typography";
import styles from "./styles.module.scss";
import CheckMarkIcon from "@components/icons/checkmark";
import CloseIcon from "@components/icons/close";
import { useAppContext } from "@contexts/AppContext";

export default function ColourSchemeFilter({ colourSchemes }) {
  const { state, dispatch } = useAppContext();
  const handleFilter = (value) => {
    dispatch({
      type: "SELECT_PRODUCT_FILTER",
      filter: {
        type: "colourSchemes",
        value,
      },
    });
  };

  return (
    <div
      className={classnames(styles.colorSchemesContainer, {
        [styles.mobileColorScheme]: state.isMobileFilterActive,
      })}
    >
      {!state.isMobileFilterActive && (
        <div
          className={classnames(
            styles.productFilterItem,
            styles.productFilterItemTitle
          )}
        >
          <Text as="h3" variant="Body-Regular">
            Refine your <br /> colour schemes
          </Text>
        </div>
      )}
      <div className={styles.colorSchemeItemsContainer}>
        {colourSchemes.map((scheme, index) => {
          const textColor = scheme.textColor ? scheme.textColor : "#141414";
          return (
            <div
              key={`colour-${index}`}
              className={classnames(styles.colourScheme, {
                [styles.filterInnerMobile]: state.isMobileFilterActive,
              })}
              style={{
                background: scheme.colorHex,
              }}
              onClick={() => handleFilter(scheme.id)}
            >
              {!state.isMobileFilterActive &&
                state.filter?.colourSchemes?.length > 0 &&
                state.filter.colourSchemes.indexOf(scheme.id) !== -1 && (
                  <div
                    style={
                      !state.isMobileFilterActive
                        ? { position: "absolute", paddingBottom: "68px" }
                        : {}
                    }
                  >
                    <CheckMarkIcon color={textColor} />
                  </div>
                )}
              <Text
                variant="Body-Small"
                color={textColor}
                style={
                  !state.isMobileFilterActive
                    ? { paddingTop: "84px", position: "absolute" }
                    : {}
                }
              >
                {scheme.title}
              </Text>
              {state.isMobileFilterActive &&
                state.filter?.colourSchemes?.length > 0 &&
                state.filter?.colourSchemes?.indexOf(scheme.id) !== -1 && (
                  <CheckMarkIcon color={textColor} />
                )}
            </div>
          );
        })}
      </div>
      <div onClick={() => handleFilter("clear")} className={styles.clearFilter}>
        Clear Filter <CloseIcon color={"#0D0D0D"} />
      </div>
    </div>
  );
}
