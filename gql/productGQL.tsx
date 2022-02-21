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

const collecitonHeroImageThumb = [128 * 2, 64 * 2];
const collecitonHeroImageBlurThumb = [
  Math.round(collecitonHeroImageThumb[0] / 10),
  Math.round(collecitonHeroImageThumb[1] / 10),
];

const projectImageThumb = [710 * 2, 900 * 2];
const projectImageBlurThumb = [
  Math.round(projectImageThumb[0] / 100),
  Math.round(projectImageThumb[1] / 100),
];

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
            }
            blurThumb: heroImage @transform(width: ${collecitonHeroImageBlurThumb[0]}, height: ${collecitonHeroImageBlurThumb[1]}) {
              url
            }
            heroImageThumb: heroImage @transform(width: ${collecitonHeroImageThumb[0]}, height: ${collecitonHeroImageThumb[1]}) {
              url
              title
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
          url
        }
        galleryThumbs: gallery @transform(width: ${projectImageThumb[0]}, height:  ${projectImageThumb[1]}) {
          url
          blurThumb: url @transform(width: ${projectImageBlurThumb[0]}, height: ${projectImageBlurThumb[1]})
          title
          width
          height
        }
        project1 {
          id
          slug
          title
          ... on projects_projectDetails_Entry {
            heroImage {
              url
            }
            blurThumb: heroImage @transform(width: ${projectImageBlurThumb[0]}, height: ${projectImageBlurThumb[1]}) {
              url
            }
            heroImageThumb: heroImage @transform(width: ${projectImageThumb[0]}, height: ${projectImageThumb[1]}) {
              url
              title
              width
              height
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
            blurThumb: heroImage @transform(width: ${projectImageBlurThumb[0]}, height: ${projectImageBlurThumb[1]}) {
              url
            }
            heroImageThumb: heroImage @transform(width: ${projectImageThumb[0]}, height: ${projectImageThumb[1]}) {
              url
              title
              width
              height
            }
            location
            projectCompleted
          }
        }
      }
    }
  }
`;
