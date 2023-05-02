// const connection = require("../db/connection");

// const Sequelize = require("sequelize");
// const db = require("../db");

// const Friend = db.define("friend", {
// 	friendship_id: {
// 		type: Sequelize.BIGINT,
// 		primaryKey: true,
// 		autoIncrement: true,
// 	},
// 	status: {
// 		type: Sequelize.TINYINT,
// 		allowNull: false,
// 	},
// 	user1_id: {
// 		type: Sequelize.BIGINT,
// 		allowNull: false,
// 		references: {
// 			model: "users",
// 			key: "user_id",
// 		},
// 	},
// 	user2_id: {
// 		type: Sequelize.BIGINT,
// 		allowNull: false,
// 		references: {
// 			model: "users",
// 			key: "user_id",
// 		},
// 	},
// });

// module.exports = Friend;
