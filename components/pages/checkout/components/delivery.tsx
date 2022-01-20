import Text from "@componentscommon/typography";
import { css } from "@styled-system/css";
import DeliveryForm from "../form/DeliveryForm";
import {
    FormWrapper
} from "./styles";

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
            <FormWrapper>
                <DeliveryForm/>
            </FormWrapper>
        </div>
    )
}

export default Delivery;