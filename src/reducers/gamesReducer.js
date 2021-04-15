const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.upcoming,
        upcoming: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
