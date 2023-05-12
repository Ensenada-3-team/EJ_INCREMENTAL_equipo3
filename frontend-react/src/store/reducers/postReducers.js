const initialState = {
	posts: [],
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_POST":
			return { ...state, posts: [...state.posts, action.payload] };
		// otros casos para otras acciones
		default:
			return state;
	}
};

export default postReducer;
