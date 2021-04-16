import { gameDetails } from "../utils/Api.js";

export const loadDetail = (id, screenshots) => async (dispatch) => {
  //FETCH DATA
  const gameDetailsData = await gameDetails(id);
  dispatch({
    type: "GET_DETAIL",
    payload: {
      gameDetails: { ...gameDetailsData, screenshots: screenshots },
    },
  });
};
