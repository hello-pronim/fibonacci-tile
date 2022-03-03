import Image from "next/image";
import ArrowButton from "@components/common/button/arrowButton";
import Text from "@components/common/typography";
import { useAppContext } from "@contexts/AppContext";

import {
  CustomSolutionsCTAContainer,
  CTAImgBox,
  CTADetails,
  CTADetailsBox,
} from "./styles";

const CustomSolutionsCTAPanel = ({ data }) => {
  const { state, dispatch } = useAppContext();
  return (
    <CustomSolutionsCTAContainer>
      {data?.customImageThumb?.[0]?.url && (
        <CTAImgBox>
          <Image
            placeholder="blur"
            blurDataURL={data.blurThumb[0].url}
            src={data.customImageThumb[0].url}
            width={data.customImageThumb[0].width}
            height={data.customImageThumb[0].height}
            alt={data.customImageThumb[0].title}
            layout="responsive"
            objectFit="cover"
          />
        </CTAImgBox>
      )}
      <CTADetails backgroundColor={data.backgroundColour}>
        <CTADetailsBox>
          <Text
            as="h3"
            variant="Display-Overline"
            marginTop="25px"
            color={data.textColour ? data.textColour : "white"}
          >
            {data.customIntro}
          </Text>
          <Text
            as="h2"
            variant="Display-Large"
            altFont={true}
            color={data.textColour ? data.textColour : "white"}
            marginTop="25px"
          >
            {data.customHeader}
          </Text>
          <Text
            as="p"
            variant="Body-Large"
            marginBottom="80px"
            color={data.textColour ? data.textColour : "white"}
          >
            {data.customSolutionsText}
          </Text>
          {data?.customCtaButton && (
            <ArrowButton
              mode="light"
              title={data.customCtaButton}
              link={
                data?.customCtaLink?.[0]?.url && data?.customCtaLink?.[0]?.url
              }
              onClick={() => {
                !data?.customCtaLink?.[0]?.url &&
                  dispatch({
                    type: "OPEN_DRAWER",
                    value:
                      state.activeDrawerTab !== "contact"
                        ? true
                        : !state.openDrawer,
                  });
                dispatch({
                  type: "SET_ACTIVE_DRAWER_TAB",
                  value: "contact",
                });
              }}
            />
          )}
        </CTADetailsBox>
      </CTADetails>
    </CustomSolutionsCTAContainer>
  );
};

export default CustomSolutionsCTAPanel;
