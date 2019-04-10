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
const PORT = process.env.PORT || 4000;
// Express: Listener

APP.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});
// Exports
export default APP;
