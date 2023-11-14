function Auth(headers, callback) {
  if (process.env.API_AUTH_ENABLED == "true") {
    if (!headers["api-key"] || headers["api-key"] !== process.env.API_KEY) {
      return callback({
        status: "failed",
        message: headers["api-key"] ? "api-key is invalid" : "api-key required",
      });
    }
  }

  callback({
    status: "success",
    message: "authorized",
  });
}

module.exports = Auth;
