// importing dependencies
import "./App.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Pages from "./components/Pages";

// Pages Import
import Market from "./Pages/Market";
import Inventory from "./Pages/Inventory";
import Home from "./Pages/Home";
import UserProfile from "./Pages/UserProfile";

// making GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header></Header>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Switch>
              <Router exact path="/">
                <Home />
              </Router>
              <Route exact path="/marketplace">
                <Market />
              </Route>
              <Route exact path="/inventory">
                <Inventory />
              </Route>
              <Route exact path="/user/">
                <UserProfile />
              </Route>
            </Switch>
          
          </div>
        <Footer></Footer>
      </Router>
    </ApolloProvider>
  );
}

export default App;
