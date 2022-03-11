import { gql } from "@apollo/client";

const newsThumb = [600, 600];
const newsBlurThumb = [
  Math.round(newsThumb[0] / 100),
  Math.round(newsThumb[1] / 100),
];

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
              url
              width
              height
            }
            blurThumb: image @transform(width: ${newsBlurThumb[0]}, height: ${newsBlurThumb[1]}){
              url
              width
              height
            }
            imageThumb: image @transform(width: ${newsThumb[0]}, height: ${newsThumb[1]}){
              url
              title
              width
              height
            }
          }
        }
      }
    }
  }
`;

const newsHeroThumb = [1920 * 2, 1080 * 2];
const newsHeroBlurThumb = [
  Math.round(newsThumb[0] / 100),
  Math.round(newsThumb[1] / 100),
];
const newsTwoColThumb = [710 * 2, 820 * 2];
const newsTwoColBlurThumb = [
  Math.round(newsTwoColThumb[0] / 100),
  Math.round(newsTwoColThumb[1] / 100),
];
const newsLargeThumb = [1460 * 2, 820 * 2];
const newsLargeBlurThumb = [
  Math.round(newsTwoColThumb[0] / 100),
  Math.round(newsTwoColThumb[1] / 100),
];

export const NewsItemQuery: any = gql`
  query NewsItemQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      slug
      title
      prev(section: "news") {
        id
        slug
      }
      next(section: "news") {
        id
        slug
      }
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
              url
              width
              height
            }
            blurThumb: image @transform(width: ${newsHeroBlurThumb[0]}, height: ${newsHeroBlurThumb[1]}) {
              url
              width
              height
            }
            imageThumb: image @transform(width: ${newsHeroThumb[0]}, height: ${newsHeroThumb[1]}) {
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
              width
              height
            }
            blurThumb1: image1 @transform(width: ${newsTwoColBlurThumb[0]}, height: ${newsTwoColBlurThumb[1]}) {
              url
              width
              height
            }
            image1Thumb: image1 @transform(width: ${newsTwoColThumb[0]}, height: ${newsTwoColThumb[1]}) {
              url
              title
              width
              height
            }
            image2 {
              url
              width
              height
            }
            blurThumb2: image2 @transform(width: ${newsTwoColBlurThumb[0]}, height: ${newsTwoColBlurThumb[1]}) {
              url
              width
              height
            }
            image2Thumb: image2 @transform(width: ${newsTwoColThumb[0]}, height: ${newsTwoColThumb[1]}) {
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
            typeHandle
            image {
              url
              width
              height
            }
            blurThumb: image @transform(width: ${newsLargeBlurThumb[0]}, height: ${newsLargeBlurThumb[1]}) {
              url
              width
              height
            }
            imageThumb: image @transform(width: ${newsLargeThumb[0]}, height: ${newsLargeThumb[1]}) {
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
