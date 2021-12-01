import React from "react";
import Text from "@components/common/typography";
import { FwWrapper, LeftCol, RightCol } from "./styles";
import Image from "next/image";
import ZunicaFull from "public/assets/temp/zunica-full-1.png";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";
import theme from "@stylestheme";

const BodyContent = () => {
  return (
    <>
      <Container css={css({ py: 160, bg: theme.colors.stoneTints[8] })}>
        <FwWrapper>
          <Text variant="Display-Medium" altFont css={css({ mb: 65 })}>
            Poppin’ delivers one out of the Box at Zunica’s Nelson café.
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
      <Container css={css({ bg: theme.colors.stoneTints[8] })}>
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
    </>
  );
};
export default BodyContent;
