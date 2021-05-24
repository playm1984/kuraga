import history from "../../router-pages/history.js";

const initialState = {
    usersAPI: null,

  admin: {
    login: "admin",
    pass: "1234",
    auth: true
  },

  auth: false,
  userNow: null,
  posts: null
}

const reducer = ( state = initialState, action ) => {

    switch(action.type){

        case "SET_USER": {
            const userAPI = action.payload;
            return {
              ...state,
              usersAPI: userAPI
            };
          }

          case "LOG_IN": {
            const userValue = {
              login: action.payload.login,
              pass: action.payload.pass
            };
      
            const person = () => {
              if (
                userValue.login === state.admin.login ||
                userValue.pass === state.admin.pass
              ) {
                history.push("./profile");
                return true;
              }
              if (
                userValue.login !== state.admin.login &&
                userValue.pass !== state.admin.pass
              ) {
                return false;
              }
            };
      
            const user = person();
            console.log(state.userNow);
            return {
              ...state,
              auth: person()
            };
          }

          case "SET_POSTS": {
            const postsAPI = action.payload;
            return {
              ...state,
              posts: postsAPI
            };
          }

    default:
            return state 
    }
}

export default reducer