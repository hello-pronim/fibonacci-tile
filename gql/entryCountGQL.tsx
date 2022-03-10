import { gql } from "@apollo/client";

export const EntryCountQuery: any = gql`
    query ProjectQuery($entry: [String]) {
        entryCount(section: $entry)
    }
`;
