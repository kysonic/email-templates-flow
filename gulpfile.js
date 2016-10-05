var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var eventStream = require('event-stream');

/**
 * Переменные лайоута
 * @type {{title: string}}
 */
var layoutData = {
	title: 'Smart Gifts | Планируй новый год уже сегодня'
}
/**
 * Страницы
 * @type {*[]}
 */
var pages = [
	{
		name:'page',data: {
								generalTitle:'Hello World!',
								generalInfo: 'Accerso alius sententia ut mihi, phasmatis of interregnum ego dico, solvo meus mens mei, ' +
								'ego dico phasmatis audite meus placitum meus mens quod iacio (Nombre de la persona)',
								items: [
									{
										src: '../images/logo.jpg',
										text: 'Lorem ipsum',
										link: 'http://example.com'
									},
									{
										src: '../images/logo.jpg',
										text: 'Lorem ipsum',
										link: 'http://example.com'
									},
									{
										src: '../images/logo.jpg',
										text: 'Lorem ipsum',
										link: 'http://example.com'
									},
									{
										src: '../images/logo.jpg',
										text: 'Lorem ipsum',
										link: 'http://example.com'
									}
								]
							  }
	},
	{
		name:'another_page',data:{}
	}
];
/**
 * Опции транспиллера
 * @type {{ignorePartials: boolean, batch: string[], helpers: {capitals: Function}}}
 */
var options = {
	ignorePartials: true,
	batch : ['./src'],
	helpers : {
		/**
		 * Пример функции хэлпера для хандлбара
		 * @param str - строка к которой был применен хэлпер
		 * @returns {string}
		 */
		capitals : function(str){
			return str.toUpperCase();
		}
	}
}

gulp.task('default', function () {
	var streams = [];
	pages.forEach(page=>{
		var stream = gulp.src('src/'+page.name+'.hbs')
			.pipe(handlebars(Object.assign(layoutData,page.data), options))
			.pipe(rename(page.name+'.html'));
		streams.push(stream);
	});

	return eventStream.merge.apply(eventStream,streams)
						.pipe(gulp.dest('./dist'));
});

gulp.watch('./src/*',['default']);
