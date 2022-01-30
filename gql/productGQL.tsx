import { gql } from "@apollo/client";

export const ProductsQuery = gql `
    query {
        entries(section: "products") {
            ... on products_product_Entry {
                id
                subHeading
                title
                slug
                richText
            }
        }
    }
`;