import {
  popularGames,
  upcomingGames,
  newGames,
  searchGames,
} from "../utils/Api.js";

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

export const fetchSearch = (game_name) => async (dispatch) => {
  //FETCH DATA
  const searchGamesData = await searchGames(game_name);

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGamesData.results,
    },
  });
};
