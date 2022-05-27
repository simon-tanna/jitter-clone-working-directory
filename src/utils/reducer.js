// an alternative to useState, more complex and more powerful, more flexible
// it can provide several ways to update a state
// useState is a syntactic sugar of useReducer that simplifies is
// is like redux

// this is a helper function
// it recieves 2 parameters
// recieves the current state
// recieves the action we want to implement to the state
// based in action, the function will update the state one way or another
// action is an object with 2 keys, type and data.
// type key determines what the action is that we are taking
// data key contains the data necessary to update the state

// the function returns the updated state

export const reducer = (state, action) => {
	console.log(state);
	console.log(action);

	switch (action.type) {
		case "setMessageList": {
			// populate the message list array with the initial values
			return {
				...state,
				messageList: action.data,
			};
		}
		default:
			return state;
	}
};
