const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy(
      "/auth/google", // replace with your endpoint
      { target: "http://localhost:4000" } // replace with your target
    ),
    proxy(
      "/auth/logout", // replace with your endpoint
      { target: "http://localhost:4000" } // replace with your target
    )
  );
};
