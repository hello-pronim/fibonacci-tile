import React from "react";
import Text from "@components/common/typography";
import { FwWrapper, LeftCol, RightCol, ImageLeft, ImageRight } from "./styles";
import Image from "next/image";
import ZunicaFull from "public/assets/temp/nelsons-1.jpg";
import Nelsons2 from "public/assets/temp/nelsons-2.jpg";
import Nelsons3 from "public/assets/temp/nelsons-3.jpg";
import Plant from "public/assets/temp/plant.jpg";
import Bench from "public/assets/temp/bench.jpg";
import ProjectFull from "public/assets/temp/zunica-full-2.jpg";
import ProjHalf1 from "public/assets/temp/proj-half-1.jpg";
import ProjHalf2 from "public/assets/temp/proj-half-2.jpg";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";
import AccentText from "@components/common/accentText";

const BodyContent = () => {
  return (
    <>
      <Container css={css({ py: 120, bg: "#FFFFF8" })}>
        <AccentText top={300}>Nelson’s Cafe</AccentText>
        <FwWrapper>
          <Text variant="Display-Medium" altFont css={css({ mb: 65 })}>
            Poppin’ delivers one out of the Box
            <br /> at Zunica’s Nelson café.
          </Text>
          <Image
            alt=""
            src={ZunicaFull}
            layout="responsive"
            width="1460"
            height="820"
          ></Image>
          <Text variant="Body-XSmall" css={css({ mt: 16 })}>
            Image caption optional non turpis augue amet, risus ultricies.
            Aliquam turpis nulla sapien nisl ultrices
          </Text>
        </FwWrapper>
      </Container>
      <Container css={css({ bg: "#FFFFF8" })}>
        <LeftCol>
          <Text variant="Display-Medium" altFont>
            Bespoke benchtops, countertops and tables were skilfully created by
            stonemasons from Fibonacci’s striking ‘Poppin’ slabs
          </Text>
        </LeftCol>
        <RightCol>
          <Text variant="Body-Regular">
            It’s an assumption, held by most designers when handed a brief to
            fit out a newly-conceived hospitality space, that details of the
            intended style of cuisine, or the expected clientele, or even just a
            venue name will be revealed. However, in a twist to the usual design
            process, when approached by the developers of the café now known as
            Nelson, Melbourne-based design studio Zunica were given a brief that
            was equal parts mystifying and empowering. <br /> <br />
            Set at ground level of a combined residential/hotel build in
            outer-suburban Box Hill, the 60-seater hospitality space was
            destined to be on-sold, so an open-minded approach to the interior
            design was required. Quick to see the myriad benefits of a less
            restrained brief, principal designer Andrew Zunica framed the
            experience as an entirely positive one. “With no specified cuisine,
            or even a name, we looked to it as an exciting chance to work with
            materials we enjoy,” says Zunica. <br /> <br />
            “Our approach is generally minimalist. In this case, we used the
            existing exposed concrete and formwork as the base structure then
            applied our favoured use of just three key materials - stone, metal
            and timber.” Bespoke benchtops, countertops and tables were
            skilfully created by stonemasons from Fibonacci Stone’s striking
            ‘Poppin’ slabs, adding a bursts of complexity to the overall calm of
            the space.
          </Text>
        </RightCol>
      </Container>
      <Container css={css({ py: 120, bg: "#FFFFF8" })}>
        <ImageLeft>
          <Image
            alt=""
            src={ProjHalf1}
            objectFit="cover"
            layout="intrinsic"
            width="710"
            height="820"
          ></Image>
        </ImageLeft>
        <ImageRight>
          <Image alt="" src={ProjHalf2} width="710" height="820"></Image>
        </ImageRight>
      </Container>
      <Container css={css({ bg: "#FFFFF8" })}>
        <ImageRight>
          <Text variant="Body-Regular">
            “We had worked with Fibonacci Stone previously, and we were excited
            to explore another of their designs - consequently, the overall
            palette was influenced by the colour of Poppin’,” says Zunica. A
            limited employment of timber battens on the walls and several
            table-tops added an element of warmth, and beautifully muted sage
            green shelving and chairs, combined with an elegant selection of
            indoor greenery, fully resolved the scheme. And in a clear win for
            all parties involved, the design attracted the eye of the eventual
            proprietors of the café, the prolific Only Hospitality group.
            <br /> <br />
            “This project is a classic example of the versatility of our
            terrazzo stone within the hospitality sector”, says Michael
            Karakolis, Creative Director of Fibonacci Stone. “It is hard-wearing
            and designed for longevity in both design and function, but what we
            also see here is how crucial it is to understand and appreciate the
            importance of using experienced and talented stonemasons to achieve
            beautiful outcomes. Andrew Zunica is a brilliant designer that
            appreciates and respects craftsmanship – and this is abundantly
            evident in each of his projects.”
          </Text>
        </ImageRight>
      </Container>
      <Container css={css({ py: 120, bg: "#FFFFF8" })}>
        <FwWrapper>
          <Image
            alt=""
            src={Bench}
            layout="responsive"
            width="1460"
            height="820"
          ></Image>
          <Text variant="Body-XSmall" css={css({ mt: 16 })}>
            Image caption optional non turpis augue amet, risus ultricies.
            Aliquam turpis nulla sapien nisl ultrices
          </Text>
        </FwWrapper>
      </Container>
      <Container css={css({ py: 120, bg: "#FFFFF8" })}>
        <ImageLeft css={css({alignItems: 'center'})}>
          <Text variant="Display-Medium" css={css({ mt: 16 })} altFont>
            Adding a burst of complexity to the <br /> overall calm of the
            space.
          </Text>
        </ImageLeft>
        <ImageRight>
          <Image
            alt=""
            src={Plant}
            layout="fixed"
            objectFit="cover"
          ></Image>
        </ImageRight>
      </Container>
      <Container css={css({ bg: "#FFFFF8" })}>
        <ImageLeft>
          <Image
            alt=""
            src={Nelsons2}
            layout="fixed"
            objectFit="cover"
          ></Image>
        </ImageLeft>
        <ImageRight>
          <Image
            alt=""
            src={Nelsons3}
            layout="fixed"
            objectFit="cover"
          ></Image>
        </ImageRight>
      </Container>
      <Container css={css({ py: 120, bg: "#FFFFF8" })}>
        <FwWrapper>
          <Image
            alt=""
            src={ProjectFull}
            layout="responsive"
            width="1460"
            height="820"
          ></Image>
          <Text variant="Body-XSmall" css={css({ mt: 16 })}>
            Image caption optional non turpis augue amet, risus ultricies.
            Aliquam turpis nulla sapien nisl ultrices
          </Text>
        </FwWrapper>
      </Container>
    </>
  );
};
export default BodyContent;
