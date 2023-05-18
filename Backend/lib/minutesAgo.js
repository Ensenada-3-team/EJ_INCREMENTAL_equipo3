const moment = require("moment");


function minutesAgo(loginDate) {
	const postTime = moment(loginDate);
	return postTime.fromNow();
}


module.exports = minutesAgo