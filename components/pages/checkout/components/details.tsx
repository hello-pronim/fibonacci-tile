
import Text from "@componentscommon/typography";
import { css } from "@styled-system/css";
import DetailsForm from "../form/DetailsForm";
import {
    FormWrapper,
    OneItemRow,
    TwoItemRow
} from "./styles";

const Details = () => {
    return (
        <div>
            <Text
                variant="Display-Large"
                altFont
                css={css({
                    fontSize: 32,
                })}
            >
                About you
            </Text>
            <FormWrapper>
                <DetailsForm/>
            </FormWrapper>
        </div>
    )
}

export default Details;