import { gql } from "@apollo/client";

export const NewsQuery: any = gql`
  query NewsQuery {
    entries(section: "news") {
      id
      slug
      title
      ... on news_default_Entry {
        id
        postDate
        newsCategory {
          slug
          uri
        }
        newsComponents {
          ... on newsComponents_contentFullWidth_BlockType {
            id
            typeHandle
            contentText
          }
          ... on newsComponents_heroImageFullWidth_BlockType {
            id
            typeHandle
            image {
              id
              url(width: 600, height: 600)
            }
          }
        }
      }
    }
  }
`;

export const NewsItemQuery: any = gql`
  query NewsItemQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      slug
      title
      ... on news_default_Entry {
        id
        postDate
        newsCategory {
          slug
          title
        }
        newsComponents {
          ... on newsComponents_contentFullWidth_BlockType {
            id
            typeHandle
            contentText
          }
          ... on newsComponents_heroImageFullWidth_BlockType {
            id
            typeHandle
            image {
              id
              url
            }
            imageThumb: image
              @transform(width: 1920, height: 1080, mode: "crop") {
              url
              title
              width
              height
            }
          }
          ... on newsComponents_pullQuote_BlockType {
            id
            quote
            typeHandle
          }
          ... on newsComponents_twoColImages_BlockType {
            id
            image1 {
              url
            }
            image1Thumb: image1
              @transform(width: 710, height: 820, mode: "crop") {
              url
              title
              width
              height
            }
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
            typeHandle
            caption
          }
          ... on newsComponents_largeImage_BlockType {
            id
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
            title
            caption
          }
        }
      }
    }
  }
`;
