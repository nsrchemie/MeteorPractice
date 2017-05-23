Meteor.publish('title-posts',() => {
  return Posts.find({}, {
    fields: {
      title: 1
    }
  });
});
