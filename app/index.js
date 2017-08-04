i
'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var util = require('util');

var SpaGenerator = yeoman.generators.Base.extend({
    constructor: function(args, options) {
        yeoman.generators.Base.apply(this, arguments);
        this.on('end', function() {
            this.installDependencies({
                skipInstall: options['skip-install']
            });
        });
    },

    askFor: function() {
        var cb = this.async(),
            _ = this._;

        var prompts = [{
            name: 'appName',
            message: 'What the name of your app?',
            'default': 'Welcome'
        }];
    },

    app: function() {
        this.mkdir(this.appName);
        this.mkdir(this.appName + '/app');
        this.directory('config', this.appName + '/app/config');
        this.directory('pages', this.appName + '/app/pages');
        this.directory('templates', this.appName + '/app/templates');
    },

    projectfiles: function() {
        this.template('_.gitignore', this.appName + '/.gitignore');
        this.template('_LICENSE', this.appName + '/LICENSE');
        this.template('_README.md', this.appName + '/README.md');
    }
});
module.exports = SpaGenerator;
