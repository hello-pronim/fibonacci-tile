import { gql } from "@apollo/client";

export const ProductsQuery = gql`
  query ProductsQuery {
    entries(section: "products") {
      id
      slug
      ... on products_product_Entry {
        subline
        collections {
          title
        }
        label
        backgroundColor
        productNumber
        designStory
        projectIntroduction
        sampleAvailable
        thumbImage {
          id
          url
        }
        largeImage {
          id
          url
        }
      }
    }
  }
`;
