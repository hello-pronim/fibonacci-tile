import Image from "next/image";
import AccentText from "@components/common/accentText";
import ArrowButton from "@components/common/button/arrowButton";
import Text from "@components/common/typography";
import { Container, Wrapper, ImageWrapper, EntryWrapper } from "./styles";

const ContentWithImageModule = ({ id = "", content }) => {
  return (
    <Container id={id} mode={content.mode}>
      <Wrapper orientation={content.orientation} mode={content.mode}>
        <AccentText top={80}>{content.sectionTitle}</AccentText>
        {content.sectionTitle && (
          <Text as="h4" variant="Display-Small">
            {content.sectionTitle}
          </Text>
        )}
        {content.entries.map((entry: any, i: number) => {
          const { title, body, emphasisText, button } = entry;
          const entryCount = content.entries.length;
          return (
            <EntryWrapper
              id={entry.id ? entry.id : `entry-${i}`}
              key={`entry-${id}-${i}`}
              entries={entryCount}
              mode={content.mode}
            >
              {title && entryCount > 1 && (
                <Text as="h4" variant="Display-XSmall">
                  {title}
                </Text>
              )}
              {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
              {emphasisText && (
                <span style={{ color: "#a19082" }}>{emphasisText}</span>
              )}
              {button.label && (
                <ArrowButton
                  mode={content.mode === "dark" ? "light" : "dark"}
                  title={button.label}
                  link={button.link}
                  target="_blank"
                />
              )}
            </EntryWrapper>
          );
        })}
      </Wrapper>
      <ImageWrapper orientation={content.orientation}>
        {content?.image?.url && (
          <Image
            layout="responsive"
            placeholder="blur"
            blurDataURL={content.blurThumb.url}
            alt={content?.image?.title}
            src={content.image.url}
            width={content.image.width}
            height={content.image.height}
          />
        )}
      </ImageWrapper>
    </Container>
  );
};

export default ContentWithImageModule;
