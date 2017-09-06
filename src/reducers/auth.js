// REDUCER: TAKES IN ACTIONS + UPDATES PART OF APPLICATION STATE

// Explain why the action.type (e.g., CHECK_IF_AUTHENTICATED) is used in the switch statement,
// and not its f(x) that was exported from actions/index.js (e.g., checkIfAuthenticated() => {})
import { // ACTION TYPES imported from actions/index.js
  USER_AUTHENTICATED,
  USER_UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHECK_IF_AUTHENTICATED,
} from '../actions';

//                state  action
export default (auth = {}, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED: // login Action
      return { ...auth, authenticated: true };
    case USER_UNAUTHENTICATED: // logout Action
      return { ...auth, authenticated: false };
    case AUTHENTICATION_ERROR: // authentication throw error
      return { ...auth, error: action.payload };
    case CHECK_IF_AUTHENTICATED: // authentication check 
      return { ...auth };
    default:
      return auth; // return state that was sent to this f(x)
  }
};
