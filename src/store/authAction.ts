import { SET_AUTHENTICATED } from "./type";

// Define the interface for the authentication payload
interface AuthType {
    name: string; // Define the type for the 'name' property
    isLoggedIn: boolean; // Define the type for the 'isLoggedIn' property
}

// Action creator function
export const setAuthentication = (isAuthenticated: AuthType) => {
    return {
        type: SET_AUTHENTICATED,
        isAuthenticated: isAuthenticated
    };
};
