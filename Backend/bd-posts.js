const posts = [
	{
		id: 1,
		title: "My First Post",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel leo ut ante facilisis hendrerit. Mauris eget congue urna. Sed id velit velit. Nulla consectetur magna vel ultrices faucibus.",
		author: {
			id: 1,
			name: "Silvia Pescador",
		},
		date: "2023-04-20",
		likes: 5,
		dislikes: 1,
		comments: [
			{
				id: 1,
				author: {
					id: 2,
					name: "Sandra Suarez",
				},
				body: "Great post! I really enjoyed reading it.",
			},
			{
				id: 2,
				author: {
					id: 3,
					name: "Jose Melian",
				},
				body: "Thanks for sharing your thoughts. I agree with you on many points.",
			},
		],
		image: "https://picsum.photos/800/400?random=1",
	},
	{
		id: 2,
		title: "My Second Post",
		body: "Pellentesque ultrices ligula non turpis vulputate, vel porttitor metus faucibus. Pellentesque commodo, ante vel pharetra malesuada, neque elit mattis elit, a scelerisque lacus arcu vel felis. Suspendisse potenti. Integer faucibus fermentum risus, sit amet lacinia dolor tincidunt vel.",
		author: {
			id: 2,
			name: "Sandra Suarez",
		},
		date: "2023-04-21",
		likes: 8,
		dislikes: 0,
		comments: [
			{
				id: 3,
				author: {
					id: 1,
					name: "Silvia Pescador",
				},
				body: "Great job on this post! I found it very insightful.",
			},
			{
				id: 4,
				author: {
					id: 3,
					name: "Jose Melian",
				},
				body: "I enjoyed reading your post. Keep up the good work!",
			},
		],
		image: "https://picsum.photos/800/400?random=2",
	},
	{
		id: 3,
		title: "My Third Post",
		body: "Fusce in dictum turpis. Vivamus varius urna non felis malesuada consequat. Phasellus et mauris sit amet mauris euismod dictum. Sed venenatis vitae ante sit amet mattis. Suspendisse sed arcu fermentum, vulputate sapien vel, eleifend tellus. Aliquam gravida euismod urna, vel aliquet quam iaculis id. Donec molestie enim in tellus ultricies ullamcorper.",
		author: {
			id: 3,
			name: "Jose Melian",
		},
		date: "2023-04-22",
		likes: 3,
		dislikes: 2,
		comments: [
			{
				id: 5,
				author: {
					id: 4,
					name: "Aurea Perez",
				},
				body: "Interesting post! I had never thought about this topic before.",
			},
			{
				id: 6,
				author: {
					id: 2,
					name: "Sandra Suarez",
				},
				body: "Great post! Your writing is very insightful, and I can tell that you have a deep understanding of the subject matter. Keep up the good work!",
			},
			{
				id: 9,
				author: {
					id: 4,
					name: "Aurea Perez",
				},
				body: "I found this post to be very thought-provoking. You brought up some excellent points that I had never considered before.",
			},
		],
		image: "https://picsum.photos/800/400?random=8",
	},
	{
		id: 10,
		title: "My Tenth Post",
		body: "Nulla convallis libero sed accumsan laoreet. Aenean ut sapien blandit, rhoncus quam sed, lacinia tortor. Sed ullamcorper lacus mauris, vitae bibendum mauris lacinia sed. Integer sed augue elit. Sed volutpat dolor eget turpis varius, sit amet pulvinar purus aliquet. Nulla venenatis, sapien vel molestie vestibulum, risus lacus fringilla orci, sed porttitor quam ipsum at ante. Nam feugiat suscipit velit in volutpat. Suspendisse consequat mauris vitae magna facilisis venenatis. Donec et elit risus. Integer rutrum bibendum risus non euismod. Nullam vitae turpis vel purus sollicitudin ullamcorper at ac dolor. Proin feugiat nisi purus, vel congue quam sagittis eu. Vestibulum vel nisl ac lacus suscipit consequat.",
		author: {
			id: 4,
			name: "Aurea Perez",
		},
		date: "2023-04-22",
		likes: 10,
		dislikes: 0,
		comments: [
			{
				id: 16,
				author: {
					id: 3,
					name: "Jose Melian",
				},
				body: "Excellent post! You clearly put a lot of thought and research into this topic.",
			},
			{
				id: 17,
				author: {
					id: 1,
					name: "Silvia Pescador",
				},
				body: "Great insights! I really enjoyed reading your post.",
			},
		],
		image: "https://picsum.photos/800/400?random=9",
	},
];

module.exports = posts;
