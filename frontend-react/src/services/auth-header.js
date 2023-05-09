export default function authHeader() {
	const user = JSON.parse(localStorage.getItem("user"));

	if (user && user.token) {
		return { Authorization: "Bearer " + user.token };
	} else {
		return {};
	}
}

/*
PARA BACKEND CON NODE Y EXPRESS USAR:

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}

*/

