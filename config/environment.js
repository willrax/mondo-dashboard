/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    APP: {},

    modulePrefix: 'mondo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {}
    },

    contentSecurityPolicyHeader: 'Content-Security-Policy',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' https://a4g5vns74b.execute-api.eu-west-1.amazonaws.com https://production-api.gmon.io",
      'img-src': "'self' https://dl.dropboxusercontent.com https://pbs.twimg.com avatars.io https://ss3.4sqi.net *.basemaps.cartocdn.com data:",
      'style-src': "'self'",
      'media-src': "'self'"
    }
  };


  if (environment === 'development') {
    ENV.mondoHost = process.env.MONDO_HOST;
    ENV.authHost = process.env.AUTH_HOST;
  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.mondoHost = process.env.MONDO_HOST;
    ENV.authHost = process.env.AUTH_HOST;
  }

  return ENV;
};
