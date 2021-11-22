import classnames from "classnames";
import Text from "@components/common/typography";
import styles from "./styles.module.scss";
import CheckMarkIcon from "@components/icons/checkmark";

export default function ColourSchemeFilter({}) {
  const schemeArray = [
    { label: "Warm", colour: "#DEDCDC" },
    { label: "Cool", colour: "#DEE2E4" },
    { label: "Blacks", colour: "#666366", textColour: "#FFF" },
    { label: "Greys", colour: "#F0EBE7" },
    { label: "Whites", colour: "#F7F6F5" },
    { label: "Earthy", colour: "#E7DBC9" },
    { label: "Pinks", colour: "#F1E1DA" },
    { label: "Blues", colour: "#E2E9EC" },
    { label: "Oranges", colour: "#EFCDB4" },
  ];
  const selectColor = () => {};
  return (
    <div className={styles.productsFilterContainer}>
      <div
        className={classnames(
          styles.productFilterItem,
          styles.productFilterItemTitle
        )}
      >
        <Text as="h3" variant="Body-Small">
          Refine your colour schemes
        </Text>
      </div>
      <div className={styles.colorSchemsContainer}>
        {schemeArray.map((scheme, index) => (
          <div
            key={`colour-${index}`}
            className={styles.colourScheme}
            style={{
              background: scheme.colour,
            }}
          >
            <CheckMarkIcon color={scheme.textColour} />
            <Text variant="Body-Small" color={scheme.textColour}>
              {scheme.label}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
