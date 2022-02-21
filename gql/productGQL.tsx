import { gql } from "@apollo/client";
import { LIST_PRODUCT_FIELDS } from "./fragments";

export const ProductsQuery = gql`
  ${LIST_PRODUCT_FIELDS}
  query ProductsQuery(
    $search: String = ""
    $productCategories: [QueryArgument] = []
    $colourSchemes: [QueryArgument] = []
    $orderBy: String = "title ASC"
    $collections: [QueryArgument] = []
    $limit: Int = 50
    $id: [QueryArgument] = null
  ) {
    entries(
      section: "products"
      search: $search
      productCategories: $productCategories
      colourSchemes: $colourSchemes
      orderBy: $orderBy
      collections: $collections
      limit: $limit
      id: $id
    ) {
      id
      slug
      ...ListProductFields
    }
  }
`;

export const ProductQuery = gql`
  query ProductQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      slug
      prev(section: "products") {
        id
        slug
        ... on products_product_Entry {
          collections {
            slug
          }
        }
      }
      next(section: "products") {
        id
        slug
        ... on products_product_Entry {
          collections {
            slug
          }
        }
      }
      ... on products_product_Entry {
        title
        subline
        collections {
          id
          title
          slug
          ... on collections_Category {
            heroImage {
              url
              width
              height
            }
          }
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
          id
          url
        }
        blurThumb: thumbImage @transform(width: 50, height: 50) {
          url
        }
        thumbImageSingle: thumbImage
          @transform(handle: "productDetailThumbnail") {
          id
          url
          width
          height
        }
        largeImage {
          id
          url
        }
        gallery {
          id
          title
          url
        }
        project1 {
          id
          slug
          title
          ... on projects_projectDetails_Entry {
            heroImage {
              url
            }
            blurThumb: heroImage @transform(width: 50, height: 50) {
              url
            }
            location
            projectCompleted
          }
        }
        project2 {
          id
          slug
          title
          ... on projects_projectDetails_Entry {
            heroImage {
              url
            }
            blurThumb: heroImage @transform(width: 50, height: 50) {
              url
            }
            location
            projectCompleted
          }
        }
      }
    }
  }
`;
