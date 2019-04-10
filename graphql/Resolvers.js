import mongoose from "mongoose";
import { User } from "../db";

// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    users: async () => {
      const res = await User.find();
      return res;
    }
  },

  Mutation: {
    addUser: async (root, args) => {
      const res = await User.create(args.input);
      return res;
    }
  }
};
// Exports
export default RESOLVERS;
