import { gql } from "@apollo/client";

export const EntryCountQuery: any = gql`
    query ProjectQuery($entry: [String], $sector: [QueryArgument] = []) {
        entryCount(section: $entry, sector: $sector)
    }
`;
