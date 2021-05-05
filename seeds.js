const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

const seeds = [
	{
		name        : 'Salmon Creek',
		image       : 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		description : 'Serenity by the riverside. Listen to logging trucks whizz past from 3am till 5pm everyday!',
		author      : {
			id       : '5e80d73e82dc5f37f86e1c27',
			username : 'nat'
		}
	},
	{
		name        : 'Granite Hill',
		image       : 'https://images.unsplash.com/photo-1609751351848-1da0b4379d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80',
		description : 'Who likes climbing? Make all your bleeding knuckle dreams come true with this crack filled paradise',
		author      : {
			id       : '5e80d4ba8aff140564d5f915',
			username : 'agata'
		}
	},
	{
		name        : 'Point Peak',
		image       : 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
		description :
			'Great views of Point Peak from this campground. Enjoy hiking, birdwatching and relaxing in a hammock. Dogs welcome, great toilets and a bear cache.',
		author      : {
			id       : '5e80d73e82dc5f37f86e1c27',
			username : 'nat'
		}
	},
	{
		name        : 'Rocky Beach',
		image       : 'https://images.unsplash.com/photo-1495654794940-1c0cd2aeedc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1273&q=80',
		description :
			"A dog lovers and climbers paradise with ample dusty flat ground to pretend you're also at the beach! Who likes margaritas?!?!",
		author      : {
			id       : '5e80d4ba8aff140564d5f915',
			username : 'agata'
		}
	}
];

// purpose of this function is to start with an empty campgrouds collection and then pre-populate it with started data
async function seedDB() {
	try {
		// Remove all comments from comment collection
		await Comment.deleteMany({});
		// Remove all campgrounds from campground collection
		await Campground.deleteMany({});
		// add a few campgrounds
		for (const seed of seeds) {
			let campground = await Campground.create(seed);
			// add a few comments
			let comment = await Comment.create({
				text   : 'This place is great, but I wish I had brought more dogs.',
				author : {
					id       : '5e80d4ba8aff140564d5f915',
					username : 'agata'
				}
			});

			campground.comments.push(comment);
			campground.save();
		}
		console.log('campgrounds reseeded');
	} catch (err) {
		console.log('error: ', err);
	}
}

module.exports = seedDB;
