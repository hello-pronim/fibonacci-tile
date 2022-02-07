import { gql } from "@apollo/client";

export const PageQuery = gql`
  query PageQuery (
    $slug: [String]
  ) {
    entry(
      slug: $slug
    ) {
      id
      ... on inUse_inUse_Entry {
        pageIntro
        pageHeading
      }
      ... on latestNews_latestNews_Entry {
        pageHeading
        pageIntro
      }
    }
  }
`;

export const OurStoryPageQuery = gql`
  query OurStoryPageQuery( $slug: [String] ) {
    entry(
      slug: $slug
    ) {
      ... on ourStoryPage_ourStoryPage_Entry {
        id
        slug
        ourStoryComponents {
          ... on ourStoryComponents_headingLeftTextRight_BlockType {
            id
            headingLeft
            textRight
          }
          ... on ourStoryComponents_heroImage_BlockType {
            id
            image(withTransforms: "ourStoryPageHero") {
              id
              url
            }
          }
          ... on ourStoryComponents_quote_BlockType {
            id
            heading
            subLine
          }
        }
      }
    }
  }
`
export const NewsletterQuery = gql`
  query NewsletterQuery ( 
    $slug: [String]
    ) {
    entry(
      slug: $slug
    ) {
      ... on latestNews_latestNews_Entry {
        newsletter {
          ... on newsletter_newsletter_BlockType {
            id
            heading
            subheading
          }
        }
      }
    }
  }
`
 
