import Text from "@componentscommon/typography";
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
            <Text css={css({ paddingTop: "24px", paddingBottom: "24px" })} as="p" variant="Body-Regular">
                One of our friendly staff will be in contact shortly.
            </Text>
            <Button mode="dark" visibleArrow={false} title="Continue browsing" link="/products" />
        </div>
    )
}

export default Confirm;