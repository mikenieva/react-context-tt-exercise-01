const UserReducer = (globalState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...globalState,
        user: {
          ...action.payload,
        },
      };

    default:
      return globalState;
  }
};

export default UserReducer;
