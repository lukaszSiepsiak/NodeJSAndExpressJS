const express = require("express");
const app = express();

//  req => middleware => res

const authorize = (req, res, next) => {
  console.log("authorize");

  const { user } = req.query;

  if (user === "john") {
    req.user = { name: "john", id: 1 };

    next();
  } else {
    req.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
