// This is example of task function

var gulp = require('gulp');
var notify = require('gulp-notify');
var changed = require('gulp-changed');
var notifier = require('../helpers/notifier');
var tarsConfig = require('../../tars-config');

s3 = require('gulp-s3-upload')({
        accessKeyId: "AKIAJFQTWH2R6RS3XZSA",
        secretAccessKey: "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"
    });
    // Include browserSync, if you need to reload browser
    // var browserSync = require('browser-sync');

// require('./ path to task file, which have to be done before current task');
// require('./required-task-name');

/**
 * Task description
 * @param  {object} buildOptions
 */

//  gt = gulp.task("upload-s3", function() {
//     gulp.src("./build/*/**")
//         .pipe(s3({
//             Bucket: 'akadosoho', //  Required
//             ACL: 'public-read' //  Needs to be user-defined
//         }));
// });

module.exports = function(buildOptions) {

    return gulp.task('upload-s3', /*['required-task-name'],*/ function(cb) {
        return gulp.src('./builds/build/**')
            // Do stuff here
            .pipe(s3({
                Bucket: 'akadosoho', //  Required
                ACL: 'public-read' //  Needs to be user-defined
            }))

            // If you need to reload browser, uncomment the row below
            // .pipe(browserSync.reload({stream:true}))
            .pipe(
                // You can change text of success message
                notifier('Example task is finished')
                // if you need notify after each file will be processed, you have to use
                // notifier('Example task is finished', false)
            );

        // You can return callback, if you can't return pipe
        // cb(null);
    });
};
