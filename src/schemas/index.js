import { gql } from 'apollo-boost'

const USER = gql`
    query InfoUser($login: String!) {
        user(login: $login) {
            avatarUrl
            name
            login
            bio
            followers {
                totalCount
            }
            following {
                totalCount
            }
            pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                ... on Repository {
                        name
                        description
                        languages(first: 3) {
                            nodes {
                                name
                                color
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default { USER }