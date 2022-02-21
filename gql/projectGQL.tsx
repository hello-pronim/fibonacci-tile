import { gql } from "@apollo/client";

export const ProjectsQuery: any = gql`
  query ProjectsQuery {
    entries(section: "projects", orderBy: "postDate DESC") {
      id
      slug
      title
      postDate
      ... on projects_projectDetails_Entry {
        id
        location
        sector {
          slug
        }
        heroImage {
          url
          height
          width
        }
        blurThumb: heroImage @transform(width: 50, height: 50) {
          url
        }
        heroImageThumb: heroImage @transform(handle: "projectThumbnail") {
          id
          url
          width
          height
        }
        projectCompleted
      }
    }
  }
`;

export const ProjectQuery: any = gql`
  query ProjectQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      title
      postDate
      ... on projects_projectDetails_Entry {
        id
        location
        projectCompleted
        architect
        builder
        designer
        photographer
        backgroundColor
        label
        sector {
          slug
          title
        }
        heroImage {
          url
          height
          width
        }
        blurThumb: heroImage @transform(width: 50, height: 50) {
          url
        }
        heroImageThumb: heroImage @transform(width: 1420, height: 1658) {
          id
          url
          title
          width
          height
        }
        featuredProducts {
          title
          slug
          ... on products_product_Entry {
            title
            subline
            collections {
              id
              title
              slug
            }
            label
            thumbImage {
              id
              url
            }
            blurThumb: thumbImage @transform(width: 50, height: 50) {
              url
            }
            thumbImageList: thumbImage @transform(handle: "productThumbnail") {
              id
              url
              title
              width
              height
            }
          }
        }
        projectComponents {
          ... on projectComponents_heroBlock_BlockType {
            typeHandle
            sideText
            imageCaption
            heading
            image {
              url
            }
            blurThumb: image @transform(width: 50, height: 50) {
              url
            }
            imageThumb: image @transform(width: 2920, height: 1640) {
              url
              title
              width
              height
            }
          }
          ... on projectComponents_fullImage_BlockType {
            typeHandle
            image {
              url
            }
            blurThumb: image @transform(width: 50, height: 50) {
              url
            }
            imageThumb: image @transform(width: 2920, height: 1640) {
              url
              title
              width
              height
            }
            imageCaption
          }
          ... on projectComponents_twoColsText_BlockType {
            typeHandle
            headline
            text
          }
          ... on projectComponents_twoImages_BlockType {
            typeHandle
            image1 {
              url
              width
              height
            }
            blurThumb1: image1 @transform(width: 50, height: 50) {
              url
            }
            image1Thumb: image1 @transform(width: 1420, height: 1640) {
              url
              title
              width
              height
            }
            image1Caption
            image2 {
              url
            }
            blurThumb2: image2 @transform(width: 50, height: 50) {
              url
            }
            image2Thumb: image2 @transform(width: 1420, height: 1640) {
              url
              title
              width
              height
            }
            image2Caption
          }
          ... on projectComponents_twoColsImage_BlockType {
            typeHandle
            image {
              url
            }
            blurThumb: image @transform(width: 50, height: 50) {
              url
            }
            imageThumb: image @transform(width: 1420, height: 1640) {
              url
              title
              width
              height
            }
            headline
          }
        }
      }
    }
  }
`;
