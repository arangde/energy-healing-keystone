var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var PostCategory = new keystone.List('PostCategory');

PostCategory.add({
	name: { type: String, required: true },
});

PostCategory.relationship({ ref: 'Post', path: 'categories' });

PostCategory.register();
