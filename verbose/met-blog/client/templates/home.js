Template.home.created = () => {
  console.log('Created home template');
};

Template.home.rendered = () => {
  console.log('Rendered home template');
};


Template.home.destroyed = () => {
  console.log('Destroyed home template');
};

Template.home.helpers({
  exampleHelper: () => {
    return new Spacebars.SafeString('This text came from a <strong>helper</strong>');
  }
});
