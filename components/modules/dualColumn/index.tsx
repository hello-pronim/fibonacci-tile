import {
  Container,
  ImageWrapper,
  LeftCol,
  RightCol,
  Segment,
  BottomRow,
} from './styles';
import Text from "@componentscommon/typography";
import Image from "next/image";
import AccentText from "@components/common/accentText";
import InspireRight from "public/assets/temp/inspire-right.png";
import InspireLeft from "public/assets/temp/inspire-left.png";
import Button from "@components/common/button";

const DualColumnModule = () => {
  return (
    <Container>
      <AccentText top={160}>Be inspired</AccentText>
      <LeftCol>
        <Segment>
          <Image
            alt=""
            src={InspireLeft}
            layout="responsive"
            width={560}
            height={560}
          />
          <Text Base="h6" variant="Display-Overline">
            INTUITIVE EVOCATE CREATIONS
          </Text>
          <Text Base="h3" variant="Display-Medium">
            The Fibonacci design aesthetic creates confident, intuitive and
            evocative environments across commercial, retail, and residential
            applications.
          </Text>
        </Segment>
        <Segment>
          <Image
            alt=""
            src={InspireLeft}
            layout="responsive"
            width={560}
            height={560}
          />
          <Text Base="h6" variant="Display-Overline">
            FLAWLESS STANDARDS ALWAYS
          </Text>
          <Text Base="h3" variant="Display-Medium">
            Our product design optimises tonal consistency, enhances stability,
            improves scratch resistance, and eliminates risk of long-term
            shrinkage.
          </Text>
        </Segment>
      </LeftCol>
      <RightCol>
        <Text Base="h4" variant="Display-Large" altFont>
          From design
          <br />
          to delivery.
        </Text>
        <Segment>
          <ImageWrapper>
            <Image
              alt=""
              src={InspireRight}
              layout="responsive"
              width={790}
              height={560}
            />
          </ImageWrapper>
          <Text Base="h6" variant="Display-Overline">
            REVOLUTIONARY PRODUCT CALIBER
          </Text>
          <Text Base="h3" variant="Display-Medium">
            Fibonacci controls the chain of custody from design to manufacture,
            guaranteeing unparalleled product quality and ongoing accessible
            supply.
          </Text>
        </Segment>
        <Segment>
          <ImageWrapper>
            <Image
              alt=""
              src={InspireRight}
              layout="responsive"
              width={790}
              height={560}
            />
          </ImageWrapper>
          <Text Base="h6" variant="Display-Overline">
            READY RIGHT NOW
          </Text>
          <Text Base="h3" variant="Display-Medium">
            Fibonacci guarantees no lead times or minimum orders on any tile or
            slab, and samples are supplied immediately upon request.
          </Text>
        </Segment>
      </RightCol>
      <BottomRow>
        <Text Base="h3" variant="Display-Medium">
          LIKE NO OTHER
        </Text>
        <Button href="#">Our design process</Button>
      </BottomRow>
    </Container>
  );
};

export default DualColumnModule;
