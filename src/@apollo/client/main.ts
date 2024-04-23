import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "http://192.168.0.106:3010/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhvYW5sZTM5NkBnbWFpbC5jb20iLCJfaWQiOiI2NjI3OTU5MGFmNmM5YTFlMjkwNGJlZTYiLCJleHBpcmF0aW9uIjoiMjAyNC0wNC0yNFQxODoyOToxMS4xOThaIiwiaWF0IjoxNzEzODgzMzUxLCJleHAiOjE3MTM4ODY5NTF9.R2vrMmFDMZ3FXiFbB5x3YP9cqRG04dEGhIMaKncMLHE",
  },
});
