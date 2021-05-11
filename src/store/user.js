const initialState = {
    name: 'gokul',
    loggedIn : false
};

export function userReducer(state =initialState, action){
    return state;
};


//selectors
export const getUsername = state => state.user.name;