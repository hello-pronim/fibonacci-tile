import React from "react";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import theme from "@styles/theme";
import { Container } from "./styles";

const CollectionHeroModule = ({ collection }) => {
  return (
    <Container>
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gridColumn: "1 / span 2",
          gridRow: 2,
          height: "100%",
          [theme.mediaQueries.small]: {
            gridColumn: "1 / span 3",
            gridRow: 1,
          },
        })}
      >
        <div
          css={css({ display: "flex", flexDirection: "column", rowGap: 24 })}
        >
          <Text
            variant="Display-Large"
            altFont
            css={css({
              fontSize: 42,
              [theme.mediaQueries.small]: {
                fontSize: 74,
              },
            })}
          >
            {collection.title}
          </Text>
          <Text
            variant="Body-Large"
            dangerouslySetInnerHTML={{ __html: collection.introduction }}
          ></Text>
        </div>
      </div>
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          rowGap: 60,
          gridColumn: "1 / span 2",
          gridRow: 4,
          justifyContent: "space-between",
          [theme.mediaQueries.small]: {
            gridColumn: "10 / span 3",
            gridRow: 1,
          },
        })}
      >
        {collection.subline}
      </div>
    </Container>
  );
};

export default CollectionHeroModule;
