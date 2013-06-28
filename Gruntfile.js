process.env.PHANTOMJS_BIN = __dirname + '/node_modules/phantomjs/lib/phantom/bin/phantomjs';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        karma: {
            options: {
                //uuh karma fails if this is missing, though it has no effect at all
                configFile: 'node_modules/grunt-karma/karma.conf.js',
                urlRoot: __dirname + '/public/',
                basePath: __dirname + '/',
                singleRun: true,
                autoWatch: false,
                logLevel: 'info',
                exclude: [
                  '**/*.min.js',
                  'public/components/**/test/**'
                ]
            },
            "unit-dev": {
                options: {
                    files: [
                      'node_modules/karma/adapter/lib/jasmine.js',
                      'node_modules/karma/adapter/jasmine.js',
                      //watch for reload and serve but do NOT include into testing frame with a script tag
                      {pattern: 'public/**/*.html', included: false},
                      'public/components/jquery/jquery.js',
                      'public/components/bootstrap-assets/js/bootstrap.js',
                      'public/components/**/*.js',
                      'public/js/**/*.js',
                      'public/spec/unit/**/*.js'
                    ],
                    browsers: ['PhantomJS'],
                    singleRun: false,
                    autoWatch: true
                }
            }
        }
    });

    grunt.registerTask('test',  ['karma:unit-dev']);

    // Load the plugins provided by npm
    grunt.loadNpmTasks('grunt-karma');
};
