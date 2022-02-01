import { gql } from "@apollo/client";

export const ProjectsQuery: any = gql`
  query ProjectsQuery(
      $section: [String] = "projects"
    ) {
    entries(
      section: $section
    ) {
      id
      slug
      title
      ... on projects_projectDetails_Entry {
        id
        location
        sector {
          slug
        }
        heroImage {
          url
          height
          width
        }
        projectCompleted
      }
    }
  }
`
