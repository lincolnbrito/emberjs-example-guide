var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function(){
	this.route('about', {path: '/aboutus'});
	this.route('credits');
	this.resource('services', function() {
    	this.route('web');
    	this.route('marketing');
    	this.route('programming');
  	});
});

App.Router.reopen({
  rootURL: '/blog/'
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    controller.set('title', "My App");
  }
});
App.AboutRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    controller.set('title', "Olá");
  }
});
