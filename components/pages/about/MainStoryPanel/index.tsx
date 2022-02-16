import Image from "next/image";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import AccentText from "@components/common/accentText";
import {
  Panel,
  Container,
  StoryTitleWrapper,
  StoryTitle,
  StorySubTitle,
  StoryImageWrapper,
  StoryContentWrapper,
  StoryContentWrapperLeft,
  StoryContentWrapperRight,
} from "./styles";

interface mainStoryPanelProps {
  story: any;
  bgColor: string;
}

function MainStoryPanel({ story, bgColor }: mainStoryPanelProps) {
  return (
    <Panel
      css={css({
        backgroundColor: bgColor,
      })}
    >
      {story.accentText && (
        <AccentText top={120}>{story.accentText}</AccentText>
      )}
      <Container>
        <StoryTitleWrapper>
          <StoryTitle>
            <h4>{story.title}</h4>
          </StoryTitle>
          {story.subtitle && (
            <StorySubTitle>
              <h4>{story.subtitle}</h4>
            </StorySubTitle>
          )}
        </StoryTitleWrapper>
        {story?.thumbnail?.[0]?.url && (
          <StoryImageWrapper>
            <Image
              placeholder="blur"
              blurDataURL={story.thumbnail[0].url}
              src={story.thumbnail[0].url}
              alt={story.thumbnail[0].title}
              width={story.thumbnail[0].width}
              height={story.thumbnail[0].height}
              layout="responsive"
            />
            <Text variant="Body-Small" as="p" mt={10}>
              {story.caption}
            </Text>
          </StoryImageWrapper>
        )}
        <StoryContentWrapper>
          <StoryContentWrapperLeft></StoryContentWrapperLeft>
          <StoryContentWrapperRight
            dangerouslySetInnerHTML={{ __html: story.content }}
          ></StoryContentWrapperRight>
        </StoryContentWrapper>
      </Container>
    </Panel>
  );
}

export default MainStoryPanel;
