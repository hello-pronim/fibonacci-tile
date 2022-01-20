import Text from "@componentscommon/typography";
import { css } from "@styled-system/css";

const Delivery = () => {
    return (
        <div>
            <Text
                variant="Display-Large"
                altFont
                css={css({
                    fontSize: 32,
                })}
            >
                Send my samples to:
            </Text>
        </div>
    )
}

export default Delivery;