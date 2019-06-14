'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'municipales',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // endpoints
    algoliaApp: process.env.ALGOLIA_APP,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
    cityIndex: process.env.CITY_INDEX,
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // enable mirage on the command line by running `$ MIRAGE=true ember serve`
    // anything truthy will work: `$ MIRAGE=1 ember serve`
    ENV['ember-cli-mirage'] = {
      enabled: !!process.env.MIRAGE, // allow evaluated value to control on/off
    };
    if (process.env.MIRAGE) {
      console.log('mirage enabled'); // eslint-disable-line
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.algoliaApp = 'abc123';
  }

  return ENV;
};
