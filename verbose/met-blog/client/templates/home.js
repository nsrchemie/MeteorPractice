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
  dataContextHelper: ()=>{
    return {
    someText: 'This text was set using a helper of the parent template',
    someNested: {
      text: 'That comes from someNested.text'
}}},
  
  postsList: () => {
    return [
      {
        title: 'My Second entry',
        description: 'Borem sodum color sit amet, consetetur sadipscing elitr.',
        author: 'Fabian Vogelsteller',
        timeCreated: moment().subtract(3, 'days').unix()
      },
      {
        title: 'My First entry',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
        author: 'Fabian Vogelsteller',
        timeCreated: moment().subtract(7, 'days').unix()
      }
    ];
  }
});