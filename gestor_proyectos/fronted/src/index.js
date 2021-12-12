import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:5010/graphql',
  cache: new InMemoryCache()
});


/*
<React.Fragment>
    <App />
  </React.Fragment>,
  */
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
  </React.StrictMode>,document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

