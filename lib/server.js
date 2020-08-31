/* eslint-disable no-unused-vars */
const fetch = require('node-fetch');
const {
    introspectSchema,
    makeRemoteExecutableSchema,
    ApolloServer,
} = require('apollo-server');
const {setContext} = require('apollo-link-context');
const {HttpLink} = require('apollo-link-http');

async function start({port, uri, headers}) {
    const http = new HttpLink({
        uri,
        fetch,
    });

    const link = setContext((request, previousContext) => ({
        headers,
    })).concat(http);

    const schema = await introspectSchema(link);

    const executableSchema = makeRemoteExecutableSchema({
        schema,
        link,
    });

    const server = new ApolloServer({schema: executableSchema, port});

    return server
        .listen(port)
        .then(({url}) => {
            console.log(`🚀 Server ready at ${url}`);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = {
    start,
};
