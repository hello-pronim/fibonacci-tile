import Text from "@componentscommon/typography";
import { css } from "@styled-system/css";
import { useForm } from 'react-hook-form';
import {
    FormWrapper,
    OneItemRow,
    TwoItemRow,
    ThreeItemRow,
    InfoText,
    Details,
    InputSixty,
    InputThirty,
    SelectThirty,
    InputTwentyFour,
    TextareaFullwidth
} from "./styles";

const Delivery = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TwoItemRow>
                        <InputSixty type="text" placeholder="Address" {...register("Address", {required: true, maxLength: 80})} />
                        <InputThirty type="text" placeholder="Suburb" {...register("Suburb", {required: true, maxLength: 100})} />
                    </TwoItemRow>
                    <ThreeItemRow>
                        <InputTwentyFour type="text" placeholder="Postcode" {...register("Postcode", {required: true, maxLength: 80})} />
                        <SelectThirty {...register("State", { required: true })}>
                            <option value="">State</option>
                            <option value="interiorDesigner">Interior Designer</option>
                            <option value="architect">Architect</option>
                            <option value="builder">Builder</option>
                            <option value="installer">Installer</option>
                            <option value="stonemason">Stonemason</option>
                            <option value="other">Other</option>
                        </SelectThirty>
                        <SelectThirty {...register("Country", { required: true })}>
                            <option value="">Country</option>
                            <option value="interiorDesigner">Interior Designer</option>
                            <option value="architect">Architect</option>
                            <option value="builder">Builder</option>
                            <option value="installer">Installer</option>
                            <option value="stonemason">Stonemason</option>
                            <option value="other">Other</option>
                        </SelectThirty>
                    </ThreeItemRow>
                    <OneItemRow>
                        <TextareaFullwidth placeholder='Additional Information/Special Requirements' {...register("information", { required: true })}>
                        </TextareaFullwidth>
                    </OneItemRow>
                    <InfoText>
                       <p><strong>NB:</strong> We can not send samples to PO Boxes.</p>
                    </InfoText>
                    <Details>
                        <p><strong>All Sample Requests will be actioned within 24 hours of receiving all of the required information.</strong></p>
                        <p>As part of our commitment to the environment and keeping you up-to-date with the latest products 
                        and colours in our range we do not provide samples for libraries. Instead we encourage our customers 
                        to view our range and request samples as required, per project and take advantage of our same-day 
                        dispatch express service.</p>
                    </Details>
                </form>
            </FormWrapper>
        </div>
    )
}

export default Delivery;