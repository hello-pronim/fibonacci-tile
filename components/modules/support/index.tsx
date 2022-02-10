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
import router from "next/router";

interface SupportModuleProps {
  title?: string;
  supports?: Array<any>;
  activePath?: string;
}
const SupportModule = ({
  title = "",
  supports,
  activePath = "/support",
}: SupportModuleProps) => {
  return (
    <Container>
      <Wrapper>
        {title !== "" && (
          <Text as="h6" variant="Display-Overline">
            {title}
          </Text>
        )}
        <TileWrapper>
          {supports.map((support) => (
            <Tile
              key={support.slug}
              href={support.href}
              active={activePath === support.href}
              onClick={() => {
                if (support.url) router.push(support.url);
              }}
            >
              <TileInner>
                <Icon>
                  <Image
                    alt={support.title}
                    src={support.icon}
                    width={48}
                    height={48}
                  />
                </Icon>
                <Text as="h5" variant="Display-XSmall" altFont>
                  {support.title}
                </Text>
              </TileInner>
            </Tile>
          ))}
        </TileWrapper>
      </Wrapper>
    </Container>
  );
};

export default SupportModule;
