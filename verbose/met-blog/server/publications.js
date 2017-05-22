Meteor.publish('limited-posts', () => {
  return Posts.find({}, {
    limit: 2});
});
