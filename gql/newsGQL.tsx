import { gql } from "@apollo/client";

export const NewsQuery: any = gql`
  query NewsQuery {
    entries(section: "news") {
      id
      slug
      title
      ... on news_default_Entry {
        id
        newsCategory {
          slug
          uri
        }
        newsComponents {
          ... on newsComponents_contentFullWidth_BlockType {
            id
            contentText
          }
        }
        newsComponents {
          ... on newsComponents_heroImageFullWidth_BlockType {
            id
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
