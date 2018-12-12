import gulp from 'gulp';
import runSequence from 'run-sequence';
import {get as browserSync}from 'browser-sync';
import watch from 'gulp-watch';

const bs = browserSync('server');

gulp.task('watch', () => {
	global.watch = true;

	watch(['app/sprites/**/*.png', '!app/sprites/*.png'], () => runSequence('sprites'));
	watch('app/{styles,blocks}/**/*.styl', () => {
		runSequence(['styles', 'styles:lint'], () => bs.reload('assets/styles/app.min.css'));
	});
	watch(['app/images/**/*'], () => runSequence('images', bs.reload));
	watch(['app/scripts/app.js'], () => runSequence('scripts', bs.reload));
	watch(['app/{pages,blocks}/**/*.jade'], () => runSequence('templates', bs.reload));
	watch('app/resources/**/*', () => runSequence('copy', bs.reload));
	watch('app/icons/**/*.svg', () => runSequence('icons', bs.reload));

	gulp.start('scripts-libs:watch');
});
