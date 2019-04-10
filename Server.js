// Imports: Express
import express from "express";
const APP = express();
// Imports: GraphQL
import SERVER from "./graphql/Schema";
// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP
});
// Express: Port
// const PORT = process.env.PORT || 4000;
// Express: Listener

APP.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`Server started on port: ${process.env.PORT || 4000}`);
});
// Exports
export default APP;
