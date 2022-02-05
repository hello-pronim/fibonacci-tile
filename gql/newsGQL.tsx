import { gql } from "@apollo/client";

export const NewsListQuery: any = gql`
  query NewsListQuery {
    entries(section: "news") {
      id
      slug
      title
    }
  }
`;

export const NewsItemQuery: any = gql`
  query NewsItemQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      title
    }
  }
`;
