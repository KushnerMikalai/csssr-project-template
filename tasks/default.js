import runSequence from 'run-sequence';
import gulp from 'gulp';

gulp.task('styles:dependencies', () =>
	runSequence(
		'sprites',
		'icons',
		'styles',
		'scripts'
	)
);

gulp.task('default', () =>
	runSequence(
		[
			'styles:dependencies',
			'templates'
		],
			'images',
			'server',
			'watch'
	)
);

gulp.task('build', () =>
	runSequence(
		'styles:dependencies',
		'imagesBuild',
		'scripts-libs',
		'copy',
		'templates'
	)
);
