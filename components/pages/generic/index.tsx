import GenericHeader from "./Header";
import { Container, InnerContainer, PageTitle } from "./styles";

const GenericPage = ({ pageData, notifications }) => {
  return (
    <Container>
      <GenericHeader mode="dark" notifications={notifications} />
      <InnerContainer>
        {pageData?.pageHeading && (
          <PageTitle Base="h2" variant="Display-Large">
            {pageData.pageHeading}
          </PageTitle>
        )}
        {pageData?.pageContent && (
          <div dangerouslySetInnerHTML={{ __html: pageData.pageContent }}></div>
        )}
      </InnerContainer>
    </Container>
  );
};

export default GenericPage;
