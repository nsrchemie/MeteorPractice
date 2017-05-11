Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('home', {
		path:'/',
		template:'home'
	});
	this.route('about', {
		path:'/about',
		template:'about'
	});
	this.route('work');
	this.route('blog', {
		path:'/blog',
		template:'blog'
	});
	this.route('contact');
});