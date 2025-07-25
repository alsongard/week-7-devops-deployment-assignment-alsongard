const initializedState = {
	isLoggedIn: false, //boolean
} // ojbect
const reducerer = (state=initializedState, action)=>{
	switch(action.type){
		case "LOGIN":
			return {
				...state,
				isLoggedIn: true
			};
		case "LOGOUT":
			return {
				...state,
				isLoggedIn: false
			};
		default:
			return state;
	}
}
export default reducerer;