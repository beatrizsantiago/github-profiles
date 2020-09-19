import ApolloClient from 'apollo-boost'

import GraphqlConfig from '../config/graphql'

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `Bearer ${GraphqlConfig.token}`,
    },
})

export default client