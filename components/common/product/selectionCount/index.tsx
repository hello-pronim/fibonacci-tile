import Text from "@components/common/typography";
import { useAppContext } from "@contexts/AppContext";

const SelectionCount = () => {
  const { state } = useAppContext();
  return (
    <Text as="span" variant="Body-XSmall" bg="stoneTints.7" p="2px 5px" color="charcoal">
      {state?.selectedProducts.length}
    </Text>
  );
};

export default SelectionCount;
