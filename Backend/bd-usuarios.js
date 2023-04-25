const users = [
	{
		id: 1,
		name: "Silvia",
		firstname: "Pescador",
		email: "pescador@grupo3.com",
		age: 37,
		password: "Grupo3!!",
		following: [
			{
				id: 2,
				name: "Sandra Suarez",
			},
			{
				id: 4,
				name: "Aurea Perez",
			},
		],
		followRequests: [],
		followMeRequests: [],
		occupation: "Software Engineer",
		location: {
			city: "Madrid",
			country: "Spain",
		},
		nickname: "silkepil",
		posts: [
			{
				id: 1,
				title: "My first post",
				body: "This is my first post on this platform",
				date: "2023-04-20",
				likes: 2,
			},
		],
		likedPosts: [2],
	},
	{
		id: 2,
		name: "Sandra",
		firstname: "Suarez",
		email: "suarez@grupo3.com",
		age: 39,
		password: "Grupo3!!",
		following: [
			{
				id: 1,
				name: "Silvia Pescador",
			},
			{
				id: 3,
				name: "Jose Melian",
			},
		],
		occupation: "Marketing Manager",
		location: {
			city: "Barcelona",
			country: "Spain",
		},
		nickname: "SS",
		posts: [
			{
				id: 2,
				title: "My second post",
				body: "This is my second post on this platform",
				date: "2023-04-22",
				likes: 1,
			},
		],
		likedPosts: [1, 3],
	},
	{
		id: 3,
		name: "Jose",
		firstname: "Melian",
		email: "melian@grupo3.com",
		age: 50,
		password: "Grupo3!!",
		following: [
			{
				id: 2,
				name: "Sandra Suarez",
			},
		],
		occupation: "Sales Director",
		location: {
			city: "Madrid",
			country: "Spain",
		},
		nickname: "JM",
		posts: [],
		likedPosts: [1],
	},
	{
		id: 4,
		name: "Aurea",
		firstname: "Perez",
		email: "perez@grupo3.com",
		age: 40,
		password: "Grupo3!!",
		following: [
			{
				id: 1,
				name: "Silvia Pescador",
			},
		],
		occupation: "HR Manager",
		location: {
			city: "Valencia",
			country: "Spain",
		},
		nickname: "AP",
		posts: [
			{
				id: 3,
				title: "My third post",
				body: "This is my third post on this platform",
				date: "2023-04-23",
				likes: 0,
			},
		],
		likedPosts: [],
	},
];

module.exports = users;
