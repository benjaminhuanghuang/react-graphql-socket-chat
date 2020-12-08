const messageResolvers = require('./message');


module.exports = {
  
  Query: {
    ...messageResolvers.Query
  },
  Mutation: {
    ...messageResolvers.Mutation
  }
};