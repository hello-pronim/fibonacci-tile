import {
  Container,
  Wrapper,
  TileWrapper,
  Tile,
  TileInner,
  Icon,
} from "./styles";
import Text from "@componentscommon/typography";
import Image from "next/image";
import SupportIcon from "public/assets/icons/support-icon.svg";

const SupportModule = () => {
  return (
    <Container>
      <Wrapper>
        <Text as="h6" variant="Display-Overline">
          HOW CAN WE HELP?
        </Text>
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
                <Image alt="" src={SupportIcon} width={48} height={48} />
              </Icon>
              <Text as="h5" variant="Display-XSmall" altFont>
                How to order samples
              </Text>
            </TileInner>
          </Tile>
          <Tile href="#">
            <TileInner>
              <Icon>
                <Image alt="" src={SupportIcon} width={48} height={48} />
              </Icon>
              <Text as="h5" variant="Display-XSmall" altFont>
                Request a quote
              </Text>
            </TileInner>
          </Tile>
          <Tile href="#">
            <TileInner>
              <Icon>
                <Image alt="" src={SupportIcon} width={48} height={48} />
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
