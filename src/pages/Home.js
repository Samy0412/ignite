import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import GameDetail from "../components/GameDetail";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";

//Styling and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Game from "../components/Game";

function Home() {
  //Get the id of the game in the params
  let { id } = useParams();
  //Set the state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //get back the state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>{id && <GameDetail pathId={id} />}</AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              screenshots={game.short_screenshots}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(300px, 450px));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
