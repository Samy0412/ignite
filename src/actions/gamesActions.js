import { popularGames, upcomingGames, newGames } from "../utils/Api.js";

//Action creator
export const loadGames = () => async (dispatch) => {
  //FETCH DATA
  const popularGamesData = await popularGames();
  const upcomingGamesData = await upcomingGames();
  const newGamesData = await newGames();
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.results,
      upcoming: upcomingGamesData.results,
      newGames: newGamesData.results,
    },
  });
};
