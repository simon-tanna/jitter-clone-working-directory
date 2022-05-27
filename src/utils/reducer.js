// an alternative to useState, more complex and more powerful, more flexible
// it can provide several ways to update a state
// useState is a syntactic sugar of useReducer that simplifies is
// is like redux

// this is a helper function
// it recieves 2 parameters
// recieves the current state
// recieves the action we want to implement to the state
// based in action, the function will update the state one way or another
// action is an object with 3 keys, type and data.

export const reducer = (state, action) => {
	console.log(state);
	console.log(action);
};
