module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');
    var buildname = pkg.name + '-' + pkg.version;
    var path = {
        src: 'src/'
    };

    grunt.initConfig({
        pkg: pkg,
        path: path,
        buildname: buildname,
        watch: {
            scripts: {
                files: '<%= path.src %>js/*.*.js',
                tasks: ['default']
            }
        },
        jshint: {
            all: [
                '<%= path.src %>js/*.*.js'
            ],
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            src: ['static/*.js', 'static/*.map', 'doc/*']
        },
        jsdoc: {
            dist: {
                src: ['README.md'],
                options: {
                    template: "node_modules/jaguarjs-jsdoc",
                    encoding: "utf8",
                    destination: "doc",
                    recurse: true,
                    private: true,
                    configure: 'jsdoc.conf.json'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    '<%= path.src %>js/namespace.js',
                    '<%= path.src %>js/model/dao/*.js',
                    '<%= path.src %>js/model/entity/*.js',
                    '<%= path.src %>js/controller/*.js',
                    '<%= path.src %>js/view/*.js',
                    '<%= path.src %>js/helper/*.js'
                ],
                dest: 'static/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapName: 'static/sourcemap.map'
            },
            dist: {
                files: {
                    'static/<%= pkg.name %>-<%= pkg.version %>.min.js': [
                        'static/<%= pkg.name %>-<%= pkg.version %>.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', [
        'jshint', 'clean', 'jsdoc', 'concat', 'uglify'
    ]);
};
