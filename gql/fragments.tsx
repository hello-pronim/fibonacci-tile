import { gql } from "@apollo/client";

export const LIST_PRODUCT_FIELDS = gql`
  fragment ListProductFields on products_product_Entry {
    title
    subline
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
    sizes {
      id
      title
      parent {
        id
        title
      }
    }
    productVariations {
      ... on productVariations_variations_BlockType {
        id
        productSize {
          title
        }
        productCode
        productType {
          title
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
