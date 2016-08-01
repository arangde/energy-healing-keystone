var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	defaultSort: 'lessonNumber'
});

Post.add({
	title: { type: String, required: true },
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
	description: { type: Types.Html, wysiwyg: true, height: 150 },
	content: { type: Types.Textarea },
	plans: { type: Types.Relationship, ref: 'Plan', many: true },
	healer: { type: Types.Relationship, ref: 'Healer' },
	segment: { type: Types.Number },
	lessonNumber: { type: Types.Number },
	duration: { type: Types.Number },
	healingMode: { type: Types.Text },
	mode: { type: Types.Select, options: 'Meditation, Exercise, Fireside Chat, Meditation/Exercise, Kid Friendly'},
	links: { type: Types.Textarea },
	download: { type: Types.Text },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage }
});

Post.defaultColumns = 'title|40%, lessonNumber, healer, segment, mode, state';
Post.register();
