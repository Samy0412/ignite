const initialState = {
  gameDetails: {},
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        gameDetails: action.payload.gameDetails,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
