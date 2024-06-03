import { GRAPHQL_URL, STORAGE_KEY } from "@/constants/constanst";
import { getStorage } from "@/libs/function";
import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${getStorage(STORAGE_KEY.TOKEN)}`,
  },
  defaultOptions: {
    query: { errorPolicy: "all" },
    mutate: { errorPolicy: "all" },
  },
});
