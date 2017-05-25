Meteor.publish('title-posts',() => {
  return Posts.find({}, {
    fields: {
      title: 1
    }
  });
});

Meteor.publish('lazyload-posts', (limit) => {
	return Posts.find({}, {
		limit:limit,
		fields: {
			text: 0
		},
		sort: {timeCreated:-1}
		});
});