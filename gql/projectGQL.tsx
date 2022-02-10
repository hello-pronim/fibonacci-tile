import { gql } from "@apollo/client";

export const ProjectsQuery: any = gql`
query ProjectsQuery {
  entries(section: "projects") {
    id
    slug
    title
    ... on projects_projectDetails_Entry {
      id
      location
      postDate
      sector {
        slug
      }
      heroImage {
        url
        height
        width
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
        heroImageThumb: heroImage @transform(handle: "projectThumbnail") {
          id
          url
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
            imageThumb: image
              @transform(width: 1460, height: 820, mode: "crop") {
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
            imageThumb: image
              @transform(width: 1460, height: 820, mode: "crop") {
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
            image1Thumb: image1
              @transform(width: 710, height: 820, mode: "crop") {
              url
              title
              width
              height
            }
            image1Caption
            image2 {
              url
            }
            image2Thumb: image2
              @transform(width: 710, height: 820, mode: "crop") {
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
            imageThumb: image
              @transform(width: 710, height: 820, mode: "crop") {
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
