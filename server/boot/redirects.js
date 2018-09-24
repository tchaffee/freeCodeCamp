module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/privacy', function(req, res) {
    res.redirect(
      301,
      'https://forum.spiraladder.com/t/spiraladder-privacy-policy/27'
    );
  });

  router.get('/learn-to-code', function(req, res) {
    res.redirect(301, '/map');
  });

  router.get('/field-guide/*', function(req, res) {
    res.redirect(302, 'http://forum.spiraladder.com');
  });

  app.use(router);
};
