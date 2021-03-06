var gulp = require("gulp"),
    async = require("async"),
    clean = require("gulp-clean"),
    exec = require("child_process").execSync; // synchronous

const BACKBITS_OUTPUT_PATH_STATIC = "../static/backbits";
const BACKBITS_OUTPUT_PATH_HTML = "../templates/backbits";
const BACKBITS_DJANGO_STATIC_ROOT = "../../static/mybits/";

// set on angular.json --> outputPath
const ANGULAR_OUTPUT_PATH = "dist/frontbits";

gulp.task('build-dev', function (cb) {

    async.series([
        (next) => {
            console.log("Cleaning previous static files...");
            gulp.src(BACKBITS_OUTPUT_PATH_STATIC, { allowEmpty: true })
                .pipe(clean({ force: true }))
                .on("finish", next);
        },
        (next) => {
            console.log("Cleaning previous html files...");
            gulp.src(BACKBITS_OUTPUT_PATH_HTML, { allowEmpty: true })
                .pipe(clean({ force: true }))
                .on("finish", next);
        },
        (next) => {
            console.log("Cleaning django static root folder...");
            gulp.src(BACKBITS_DJANGO_STATIC_ROOT, { allowEmpty: true })
                .pipe(clean({ force: true }))
                .on("finish", next);
        },
        (next) => {
            console.log("Executing angular build (wait for stdout output) ...");

            let deployUrl = "/static/backbits/";  // necessary for django static collection
            let execSync = exec(`ng build --deploy-url "${deployUrl}"`);

            console.log(execSync.toString());  // logs after process
            next();
        },
        (next) => {
            console.log("Moving index.html to django's template folder...");
            gulp.src(ANGULAR_OUTPUT_PATH + "/*.html", { allowEmpty: true })
                .pipe(gulp.dest(BACKBITS_OUTPUT_PATH_HTML))
                .on("finish", next);
        },
        (next) => {
            console.log("Moving js and css files to django's static folder...");
            gulp.src(ANGULAR_OUTPUT_PATH + "/*.*", { allowEmpty: true })
                .pipe(gulp.dest(BACKBITS_OUTPUT_PATH_STATIC))
                .on("finish", next);
        },
        (next) => {
            console.log("Moving static files to django's static folder...");
            gulp.src(ANGULAR_OUTPUT_PATH + "/static/backbits/*.*", { allowEmpty: true })
                .pipe(gulp.dest(BACKBITS_OUTPUT_PATH_STATIC))
                .on("finish", next);
        }
    ], cb);
})


gulp.task('serve', function (cb) {

    execOutput = execAsync('ng serve').stdout.on("data", data => {
        console.log(data);
    })

});
