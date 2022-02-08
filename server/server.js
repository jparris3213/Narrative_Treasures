// calling needed packages
const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const app = express();
const PORT = process.env.PORT || 3001;

// setting up Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// applying middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// displaying base webpage
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// starting server and GraphQL
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port http://localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
