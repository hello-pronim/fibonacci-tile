import ProductsHeader from "./Header";
import Slider from "./blocks/Slider";
import SectionTitle from "./blocks/SectionTitle";
import CTAPanel from "./blocks/CTAPanel";
import CollectionsItem from "./blocks/CollectionItem";
import { Container } from "./styles";

const CollectionsPage = ({
  pageData,
  terrazzoPageData,
  collections,
  collectionProducts,
  notifications,
  cta1,
  cta2,
}) => {
  const banners = [];
  if (pageData?.bannerImage?.length > 0) {
    banners.push({
      bannerImage: pageData.bannerImage[0],
      bannerIntro: pageData.bannerIntro,
      bannerHeading: pageData.bannerHeading,
      bannerSubline: pageData.bannerInnerSubline,
      bannerCTA: pageData.bannerCTA,
    });
  }
  if (terrazzoPageData?.bannerImage?.length > 0) {
    banners.push({
      bannerImage: terrazzoPageData.bannerImage[0],
      bannerIntro: terrazzoPageData.bannerIntro,
      bannerHeading: terrazzoPageData.bannerHeading,
      bannerSubline: terrazzoPageData.bannerInnerSubline,
      bannerCTA: terrazzoPageData.bannerCTA,
      bannerLinkTo: "/terrazzo",
    });
  }
  return (
    <Container>
      <ProductsHeader notifications={notifications} />
      <Slider items={banners} disableNext={true} />
      <SectionTitle
        show={false}
        title="40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built."
      />
      {collections.length > 0 &&
        collections.map((collection) => {
          return (
            <CollectionsItem
              key={collection.id}
              collectionProducts={collectionProducts}
              collection={collection}
            />
          );
        })}
      {cta1?.CTAFields?.length > 0 && (
        <CTAPanel data={cta1.CTAFields[0]} imagePosition="right" />
      )}
      {cta2?.CTAFields?.length > 0 && (
        <CTAPanel data={cta2.CTAFields[0]} imagePosition="left" />
      )}
    </Container>
  );
};

export default CollectionsPage;
