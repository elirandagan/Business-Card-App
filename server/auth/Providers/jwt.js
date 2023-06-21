const jwt = require("jsonwebtoken");
const config = require("config");

const key = config.get("JWT_KEY");

const generateAuthToken = (user) => {
  console.log(user)
  const { _id, isBusiness, isAdmin, name } = user;
  const token = jwt.sign({ _id, isBusiness, isAdmin, name }, key);
  return token;
};

const verifyToken = (tokenFromClient) => {
  try {
    const userDataFromPayload = jwt.verify(tokenFromClient, key);
    return userDataFromPayload;
  } catch (error) {
    return null;
  }
};

exports.generateAuthToken = generateAuthToken;
exports.verifyToken = verifyToken;
