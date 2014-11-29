module.exports = function(config){
  config.set({

	  basePath : './../../..',

    files : [
      'application/bower_components/angular/angular.js',
      'application/bower_components/angular-route/angular-route.js',
      'application/bower_components/angular-mocks/angular-mocks.js',
      'application/components/**/*.js',
      'application/view*/**/*.js',
      'test/unit-tests/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
