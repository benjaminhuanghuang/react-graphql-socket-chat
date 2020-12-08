const messages = [];
module.exports = {
  Query: {
    messages: () => {
      return messages;
    },
  },
  Mutation: {
    postMessage: (parent, { user, content }) => {
      const id = messages.length;
      messages.push({ id, user, content });
      return id;
    },
  },
};
