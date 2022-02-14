import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import Button from "@components/common/button";

const Confirm = () => {
  return (
    <div>
      <Text
        variant="Display-Large"
        altFont
        css={css({
          fontSize: 32,
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
      <Button color="dark" href="/terrazzo">
        Continue browsing
      </Button>
    </div>
  );
};

export default Confirm;
