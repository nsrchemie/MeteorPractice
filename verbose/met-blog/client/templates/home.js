Template.home.created = () => {
  console.log('Created home template');
};

Template.home.rendered = function() {
  console.log('Rendered home template');
  this.find('p').innerHTML = 'We just replaced the text!';
};


Template.home.destroyed = () => {
  console.log('Destroyed home template');
};

Template.home.helpers({
  exampleHelper: () => {
    return new Spacebars.SafeString('This text came from a <strong>helper</strong>');
  },
//   dataContextHelper: ()=>{
//     return {
//     someText: 'This text was set using a helper of the parent template',
//     someNested: {
//       text: 'That comes from someNested.text'
// }}},
  
  postsList: () => {
    return Posts.find({}, {sort: {timeCreated: -1}});
  }
});

Template.home.events({
	'click button.lazyload': (e,template) => {
		var currentLimit = Session.get('lazyloadLimit');

		Session.set('lazyloadLimit', currentLimit + 2);
	}
});