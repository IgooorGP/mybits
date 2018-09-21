var gulp = require("gulp"),
    sass = require("gulp-sass"),
    html = require("gulp-html"),
    ts = require("gulp-typescript"),
    browserSync = require('browser-sync');


/* serving */
gulp.task("serve", () => {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });
});

/* sass files */
sass({ indentedSyntax: true })

var inputSassFile = "./sass/main.sass",
    outputSassDir = "../static/sass";

var sassDevOptions = {
    outputStyle: "expanded"
}

var sassProdOptions = {
    outputStyle: 'compressed'
}

/* html files */
var inputHtmlFile = "./html/index.html",
    outputHtmlDir = "../templates";

/* js files */
var inputJsFile = "./js/main.ts",
    outputJsDir = "../static/js";

var tsProject = ts.createProject("tsconfig.json");

gulp.task("htmlProcess", () => {
    return gulp.src(inputHtmlFile)
        .on("error", sass.logError)
        .pipe(gulp.dest(outputHtmlDir))
        .pipe(browserSync.stream());
});

gulp.task("sassProcess", () => {
    return gulp.src(inputSassFile)
        .pipe(sass(sassDevOptions))
        .on("error", sass.logError)
        .pipe(gulp.dest(outputSassDir))
        .pipe(browserSync.stream());
});

gulp.task("tsProcess", () => {
    return gulp.src(inputJsFile)
        .pipe(tsProject())
        .pipe(gulp.dest(outputJsDir))
        .pipe(browserSync.stream());
});

// watches for changes
gulp.task("watch", ["htmlProcess", "sassProcess", "tsProcess"], () => {
    gulp.watch("ts/*.ts", ["tsProcess"]);
    gulp.watch("sass/*.sass", ["sassProcess"]);
    gulp.watch("html/index.html", ["htmlProcess"]).on("change", browserSync.reload);
});

gulp.task("default", ["watch"])