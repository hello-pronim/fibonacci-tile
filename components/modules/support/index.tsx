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

interface SupportModuleProps {
  title?: string;
  supports?: Array<any>;
  activeSupport?: string;
  setActiveSupport?: (tab) => void;
}
const SupportModule = ({
  title = "",
  supports,
  activeSupport = "",
  setActiveSupport,
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
              active={activeSupport === support.slug}
              onClick={() => setActiveSupport && setActiveSupport(support.slug)}
            >
              <TileInner>
                <Icon>
                  <Image alt="" src={support.icon} width={48} height={48} />
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
