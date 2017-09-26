module.exports = function(grunt){
    var path = require('path');
    
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        jitGrunt: {
          customTasksDir: 'grunt/tasks'
        },
        data: {
            source: 'source',
            stylesheet: 'css',
            scripts:'scripts',
            fonts:'fonts',
            images:'images',
            templates: 'templates',
            node_modules: 'node_modules',
            pattern_library: '/ucsf-pattern-library'
        }
    });
}