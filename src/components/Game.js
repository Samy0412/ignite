import React from "react";
import { Link } from "react-router-dom";
import { smallImage } from "../utils/mediaResize";

//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

function Game({ name, released, image, screenshots, id }) {
  //uploadDetails
  const dispatch = useDispatch();
  const idString = id.toString();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id, screenshots));
  };

  return (
    <StyledGame onClick={loadDetailHandler} LayoutId={idString}>
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
