/*******************************
 *           Set-up
 *******************************/

var
  gulp   = require('gulp'),

  // read user config to know what task to load
  config = require('./semantic/tasks/config/user')
;


/*******************************
 *            Tasks
 *******************************/

require('./semantic/tasks/collections/build')(gulp);
require('./semantic/tasks/collections/install')(gulp);

gulp.task('default', gulp.series('watch'));

/*--------------
      Docs
---------------*/

require('./semantic/tasks/collections/docs')(gulp);

/*--------------
      RTL
---------------*/

if (config.rtl) {
  require('./semantic/tasks/collections/rtl')(gulp);
}
