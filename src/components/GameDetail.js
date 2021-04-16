import React from "react";

//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

function GameDetail() {
  const history = useHistory();
  //Exit detail
  const exitDetailhandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  //getting the data
  const details = useSelector((state) => state.gameDetails.gameDetails);
  const isLoading = useSelector((state) => state.gameDetails.isLoading);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailhandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{details.name}</h3>
                <p>Rating: {details.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {details.platforms?.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={details.background_image}
                alt={`${details.name} background`}
              />
            </Media>
            <Description>
              <p>{details.description}</p>
            </Description>
            <div className="gallery">
              {details.screenshots?.map((screenshot) => (
                <img src={screenshot.image} alt="game" key={screenshot.id} />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
