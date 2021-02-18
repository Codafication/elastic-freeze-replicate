require("elastic-apm-node").start();
import logger from "./logging";

import * as blocked from "blocked-at";

blocked(
  (time, stack) => {
    console.log(`Blocked for ${time}ms, operation started here:`, stack);
  },
  { trimFalsePositives: true }
);

var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.send("Look! No Hands!");
});
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  logger.info(`Example app listening at http://${host}:${port}`);
});
