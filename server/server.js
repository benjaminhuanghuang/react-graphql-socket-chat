const { ApolloServer, PubSub } = require("apollo-server");

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});


server.listen({ port: 8964 })