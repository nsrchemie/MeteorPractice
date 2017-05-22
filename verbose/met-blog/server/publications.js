Meteor.publish('all-posts', () => {
  return Posts.find();
});
