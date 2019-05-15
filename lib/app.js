const { router } = require('@asl/service/ui');

const dashboard = require('../pages/dashboard');

module.exports = settings => {
  const app = router(settings);

  app.use(dashboard(settings));

  return app;
};
