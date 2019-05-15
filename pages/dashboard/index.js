const { page } = require('@asl/service/ui');

module.exports = settings => {
  const app = page({
    ...settings,
    root: __dirname
  });

  app.get('/', (req, res, next) => {
    res.locals.static.user = req.user;
    next();
  });

  app.get('/', (req, res) => res.sendResponse());

  return app;
};
