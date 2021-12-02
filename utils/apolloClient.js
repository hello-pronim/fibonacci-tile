import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "http://fibonacci-craftcms.nitro/api",
    cache: new InMemoryCache(),
})

export default apolloClient;