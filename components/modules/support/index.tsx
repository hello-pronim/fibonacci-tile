import {
  Container,
  Wrapper,
  TileWrapper,
  Tile,
  TileInner,
  Icon,
} from "./styles";
import Text from "@components/common/typography";
import Image from "next/image";
import SupportIcon from "public/assets/icons/support-icon.svg";
import SamplesIcon from "public/assets/icons/sample-icon.svg";
import QuoteIcon from "public/assets/icons/quote-icon.svg";
import EnquiryIcon from "public/assets/icons/enquiry-icon.svg";

const SupportModule = ({ title = "" }) => {
  return (
    <Container>
      <Wrapper>
        {title !== "" && (
          <Text as="h6" variant="Display-Overline">
            {title}
          </Text>
        )}
        <TileWrapper>
          <Tile href="#">
            <TileInner>
              <Icon>
                <Image alt="" src={SupportIcon} width={48} height={48} />
              </Icon>
              <Text as="h5" variant="Display-XSmall" altFont>
                Product Support
              </Text>
            </TileInner>
          </Tile>
          <Tile href="#">
            <TileInner>
              <Icon>
                <Image alt="" src={SamplesIcon} width={48} height={48} />
              </Icon>
              <Text as="h5" variant="Display-XSmall" altFont>
                How to order samples
              </Text>
            </TileInner>
          </Tile>
          <Tile href="#">
            <TileInner>
              <Icon>
                <Image alt="" src={QuoteIcon} width={48} height={48} />
              </Icon>
              <Text as="h5" variant="Display-XSmall" altFont>
                Request a quote
              </Text>
            </TileInner>
          </Tile>
          <Tile href="#">
            <TileInner>
              <Icon>
                <Image alt="" src={EnquiryIcon} width={48} height={48} />
              </Icon>
              <Text as="h5" variant="Display-XSmall" altFont>
                General Enquiry
              </Text>
            </TileInner>
          </Tile>
        </TileWrapper>
      </Wrapper>
    </Container>
  );
};

export default SupportModule;
