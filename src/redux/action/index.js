const logIn = (data) => {
    return{
        type: "LOG_IN",
        payload: {...data}
    }
}

const setPosts = (data) => {
    return {
      type: "SET_POSTS",
      payload: data
    };
  };
  
  const setUser = (data) => {
    return {
      type: "SET_USER",
      payload: data
    };
  };


export { logIn, setPosts, setUser }