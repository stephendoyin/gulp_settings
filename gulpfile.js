
const { series } = require('gulp');
require('./gulp/tasks/styles');
require('./gulp/tasks/modernizr');
require('./gulp/tasks/scripts');
require('./gulp/tasks/watch');


exports.watch = series('watch', 
  series(series('styles', 'cssInject'), series(series('modernizr', 'scripts'), 'scriptsRefresh'))
);
