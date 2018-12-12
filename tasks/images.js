import gulp from 'gulp';
import image from 'gulp-image';

gulp.task('images', () =>
	gulp.src('app/images/**/*').pipe(gulp.dest('dist/assets/images/'))
);

gulp.task('imagesBuild', () =>
	gulp
		.src('app/images/**/*')
		.pipe(
			image({
				pngquant: true,
				optipng: false,
				zopflipng: true,
				jpegRecompress: false,
				mozjpeg: true,
				guetzli: false,
				gifsicle: true,
				svgo: true,
				concurrent: 10,
				quiet: true
			})
		)
		.pipe(gulp.dest('dist/assets/images/'))
);
