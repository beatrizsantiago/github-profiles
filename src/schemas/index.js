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
                        languages(first: 2) {
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

const REPOSITORIES_USER = gql`
    query RepositoriesUser($login: String!) {
        user(login: $login) {
            repositories(first: 20) {
                nodes {
                    name
                    description
                    updatedAt
                    stargazers(first: 1) {
                        totalCount
                    }
                    forkCount
                    watchers(first: 1) {
                        totalCount
                    }
                    languages(first: 4) {
                        nodes {
                                name
                                color
                        }
                    }
                }
            }
        }
    }
`

export default { USER, REPOSITORIES_USER }