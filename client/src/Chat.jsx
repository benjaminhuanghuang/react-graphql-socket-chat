import React from "react";
//
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8964",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  query {
    messages {
      id
      content
      user
    }
  }
`;

const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

const Messages = ({ user }) => {
  const { loading, error, data } = useQuery(GET_MESSAGES);
  console.log("data:",data)
  if(loading){
    return 'Loading...'
  }
 
  if (!data) {
    return null;
  }

  return JSON.stringify(data);
};

const Chat = () => {
  return (
    <div>
      <Messages user="ben"></Messages>
    </div>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Chat></Chat>
  </ApolloProvider>
);
