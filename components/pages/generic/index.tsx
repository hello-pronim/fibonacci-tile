import GenericHeader from "./Header";
import { Container, InnerContainer, PageTitle } from "./styles";
import css from '@styled-system/css';
import BreadCrumb from '@components/common/breadcrumb';

const GenericPage = ({ pageData, notifications }) => {
  const crumbs = [
    { path: "/", name: "Home" },
    { name: pageData.title },
  ];
  return (
    <Container>
      <GenericHeader mode="dark" notifications={notifications} />
      <div
        css={css({
          position: 'absolute',
          maxWidth: "2560px",
          pl: "32px",
          pt: 92,
          pb: 0,
        })}
      >
        <BreadCrumb crumbs={crumbs} pt={0} />
      </div>
      <InnerContainer>
        <div className="titleContentBlock">
          {pageData?.title && (
            <PageTitle as="h2" variant="Display-Large">
              {pageData.title}
            </PageTitle>
          )}
        </div>
        <div className="detailsContentBlock">
          {pageData?.pageContent && (
            <div dangerouslySetInnerHTML={{ __html: pageData.pageContent }}></div>
          )}
        </div>
      </InnerContainer>
    </Container>
  );
};

export default GenericPage;
