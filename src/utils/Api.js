import axios from "axios";
import moment from "moment";

const rawgAxios = axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: process.env.REACT_APP_RAWG_API,
  },
});

const today = moment().format("YYYY-MM-DD");
const nextYear = moment().add(1, "year").format("YYYY-MM-DD");
const lastYear = `${moment().subtract(1, "year").format("YYYY-MM-DD")}`;

export const popularGames = async () => {
  const { data } = await rawgAxios.get("/games", {
    params: {
      dates: `${lastYear},${today}`,
      ordering: "-rating",
      page_size: 10,
    },
  });

  return data;
};

export const upcomingGames = async () => {
  const { data } = await rawgAxios.get("/games", {
    params: {
      dates: `${today},${nextYear}`,
      ordering: "-added",
      page_size: 10,
    },
  });

  return data;
};

export const newGames = async () => {
  const { data } = await rawgAxios.get("/games", {
    params: {
      dates: `${lastYear},${today}`,
      ordering: "-released",
      page_size: 10,
    },
  });

  return data;
};

export const gameDetails = async (id) => {
  const { data } = await rawgAxios.get(`/games/${id}`);
  return data;
};
