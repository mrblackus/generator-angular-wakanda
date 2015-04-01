// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

var fs = require('fs');

var helpers = {
  findWakandaWaProjectFilename : function(){
    var result = null;
    var wakandaProjectDir = fs.readdirSync('.');
    wakandaProjectDir.forEach(function(fileName){
      if(fileName.toLowerCase().indexOf('.waproject') > -1){
        result = fileName;
      }
    });
    return result;
  },
  findWebFolderNameInWaProjectFile : function(fileName) {
    var parsedXml = null;
    var finalResult = null;
    var file = fs.readFileSync(__dirname + '/'+fileName);
    var xmlParser = new require('xml2js').Parser({async:false});
    xmlParser.parseString(file,function(err, data){
      parsedXml = data;
    });
    if(parsedXml !== null){
      parsedXml['project']['folder'].forEach(function(item1){
        item1['tag'].forEach(function(item2){
          if(item2.$.name === "webFolder"){
            finalResult = item1.$.path.replace('./','').replace('/','');
          }
        });
      });
    }
    return finalResult;
  },
  findWakandaProjectWebFolder : function(){
    var result = null;
    var waProjectFileName = this.findWakandaWaProjectFilename();
    if(waProjectFileName !== null){
      result = this.findWebFolderNameInWaProjectFile(waProjectFileName);
    }
    return result || "WebFolder";
  }
};

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  
  var angularAppFolder = '<%= angularAppName %>';
  var bowerrc;
  
  //find the name of the bower_components folder
  try{
    bowerrc = JSON.parse(fs.readFileSync(__dirname + '/'+angularAppFolder+'/.bowerrc'));
  }
  catch(e){
    bowerrc = {
      directory : "bower_components"
    };
  }
  
  var wakandaProject = {
    angularAppFolder : angularAppFolder,
    webFolder : helpers.findWakandaProjectWebFolder(),
    angularApp : {
      app : require('./'+angularAppFolder+'/bower.json').appPath || 'app',
      dist : 'dist',
      bower_components : bowerrc.directory
    }
  };
  
  grunt.initConfig({
    
    wakandaProject : wakandaProject,
    
    copy : {
      appToWakandaProjectWebFolder : {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%%= wakandaProject.angularAppFolder %>/<%%= wakandaProject.angularApp.app %>',
          dest: '<%%= wakandaProject.webFolder %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'robots.txt',
            '*.html',
            'views/**/*.html',
            'scripts/**/*.js',
            'styles/**/*.css',
            'images/**.{png,jpg,jpeg,gif,webp,svg}',
            'fonts/*'
          ]
        }]
      },
      bowercomponentsToWakandaProjectFolder: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%%= wakandaProject.angularAppFolder %>/<%%= wakandaProject.angularApp.bower_components %>',
          dest: '<%%= wakandaProject.webFolder %>/<%%= wakandaProject.angularApp.bower_components %>',
          src: [
            '**/*'
          ]
        }]
      },
      distToWakandaProjectWebFolder : {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%%= wakandaProject.angularAppFolder %>/<%%= wakandaProject.angularApp.dist %>',
          dest: '<%%= wakandaProject.webFolder %>',
          src: [
            'bower_components/**/*',
            '*.{ico,png,txt}',
            '.htaccess',
            'robots.txt',
            '*.html',
            'views/**/*.html',
            'scripts/**/*.js',
            'styles/**/*.css',
            'images/**.{png,jpg,jpeg,gif,webp,svg}',
            'fonts/*'
          ]
        }]
      }
    },
    
    clean : {
      wakandaProjectWebFolder : {
        files: [{
          dot: true,
          src: [
            '<%%= wakandaProject.webFolder %>/*',
            '!<%%= wakandaProject.webFolder %>/.git*'
          ]
        }]
      }
    }
    
  });
  
  grunt.registerTask('wakCopy',[
    'clean:wakandaProjectWebFolder',
    'copy:appToWakandaProjectWebFolder',
    'copy:bowercomponentsToWakandaProjectFolder'
  ]);
  
  grunt.registerTask('wakCopyBuild',[
    'clean:wakandaProjectWebFolder',
    'copy:distToWakandaProjectWebFolder'
  ]);
  
  grunt.registerTask('serve',function(){
    grunt.log.warn('You can\'t run this command here, more information in grunt help');
  });
  
  grunt.registerTask('build',function(){
    grunt.log.warn('You can\'t run this command here, more information in grunt help');
  });
  
  grunt.registerTask('help',function(){
    
    grunt.log.writeln('This is the main grunt cmd line. You have access to tasks like :');
    grunt.log.writeln('  grunt wakCopy');
    grunt.log.writeln('  grunt wakCopyBuild');
    grunt.log.writeln('');
    grunt.log.writeln('to launch your angular application, just :');
    grunt.log.writeln('  cd '+angularAppFolder);
    grunt.log.writeln('then use any of the usual yeoman commands like :');
    grunt.log.writeln('  grunt serve');
    grunt.log.writeln('  grunt build');
    
  });
  
  grunt.registerTask('default',['help']);
  
};