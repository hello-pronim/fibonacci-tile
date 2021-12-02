import { gql } from "@apollo/client";

export const ProductsQuery = gql `
    query {
        entries(section: "products") {
        uri
        ... on products_stories_Entry {
            id
            subHeading
            title
            slug
            richText
        }
        }
    }
`;