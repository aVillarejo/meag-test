import mongoose from "mongoose";

mongoose.Promise = global.Promise;

let mongoUserCredentials = "";
if (process.env.MONGO_USER && process.env.MONGO_PASSWORD) {
  mongoUserCredentials = `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@`;
}

const MONGO_URL = process.env.MONGO_URL || "clusterav-qx4cd.mongodb.net";
const DB_NAME = process.env.MONGO_DB_NAME || "CRM_DB";
const MONGO_CONNECTION_STRING = `mongodb://${mongoUserCredentials}${MONGO_URL}/${DB_NAME}`;

mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true });
mongoose.set("findAndModify", false);

//#region schemas
const USER_SCHEMA = new mongoose.Schema({
  name: String,
  password: String
});
//#endregion schemas

//#region models
const User = mongoose.model("User", USER_SCHEMA);
//#endregion models

module.exports = {
  User
};
