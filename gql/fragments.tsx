import { gql } from "@apollo/client";

export const LIST_PRODUCT_FIELDS = gql`
  fragment ListProductFields on products_product_Entry {
    id
    title
    subline
    slug
    collections {
      id
      title
      slug
    }
    label
    backgroundColor
    productNumber
    designStory
    projectIntroduction
    sampleAvailable
    materialsComposition
    finishAppearance
    applications
    productVariations {
      ... on productVariations_BlockType {
        id
        available
        productCode
        productSize {
          id
          title
          parent {
            id
            title
          }
        }
      }
    }
    productCategories {
      title
    }
    thumbImage {
      url
    }
    thumbImageList: thumbImage @transform(handle: "productThumbnail") {
      id
      url
      title
      width
      height
    }
    thumbImageSingle: thumbImage @transform(handle: "productDetailThumbnail") {
      id
      url
      title
      width
      height
    }
    largeImage {
      id
      url
      title
    }
  }
`;
