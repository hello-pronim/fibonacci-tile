import { gql } from "@apollo/client";

export const ProductsQuery = gql`
  query ProductsQuery {
    entries(section: "products") {
      id
      slug
      ... on products_product_Entry {
        title
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
        productCategories {
          title
        }
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

export const ProductQuery = gql`
  query ProductQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      slug
      ... on products_product_Entry {
        title
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
        productCategories {
          title
        }
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
