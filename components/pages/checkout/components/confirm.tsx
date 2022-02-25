import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import Button from "@components/common/button";
import { CheckoutFooter } from "../styles";
const Confirm = ({stepChange}) => {
  return (
    <div  
    css={css({
      maxWidth: "560px",
    })}>
      <Text
        variant="Display-Large"
        altFont
        css={css({
          fontSize: 42,
        })}
      >
        Thank you for your order.
      </Text>
      <Text
        css={css({ paddingTop: "24px", paddingBottom: "24px" })}
        as="p"
        variant="Body-Regular"
      >
        One of our friendly staff will be in contact shortly.
      </Text>
      <CheckoutFooter>
        <div className="back" onClick={() => stepChange(3)}>
          Back
        </div>
        <Button color="dark" css={css({ cursor:"pointer", minWidth: "210px", textAlign: "center", })} href="/terrazzo">
          Continue browsing
        </Button>
      </CheckoutFooter>
    </div>
  );
};

export default Confirm;
