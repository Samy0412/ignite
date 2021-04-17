import React from "react";

import { smallImage } from "../utils/mediaResize";

import parse from "html-react-parser";

//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

function GameDetail({ pathId }) {
  const history = useHistory();
  //Exit detail
  const exitDetailhandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return ".././img/playstation.svg";
      case "PlayStation 5":
        return ".././img/playstation.svg";
      case "Xbox One":
        return ".././img/xbox.svg";
      case "Xbox Series S/X":
        return ".././img/xbox.svg";
      case "Xbox S":
        return ".././img/xbox.svg";
      case "PC":
        return ".././img/steam.svg";
      case "Nintendo Switch":
        return ".././img/nintendo.svg";
      case "iOS":
        return ".././img/apple.svg";
      case "macOS":
        return ".././img/apple.svg";
      default:
        return ".././img/gamepad.svg";
    }
  };

  //get rating stars
  const getStars = (r) => {
    const stars = [];
    const rating = Math.floor(r);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          alt="star"
          key={i}
          src={
            i <= rating ? ".././img/star-full.png" : ".././img/star-empty.png"
          }
        ></img>
      );
    }
    return stars;
  };
  //getting the data
  const details = useSelector((state) => state.gameDetails.gameDetails);
  const isLoading = useSelector((state) => state.gameDetails.isLoading);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailhandler}>
          <Detail LayoutId={pathId}>
            <Stats>
              <div className="rating">
                <h3>{details.name}</h3>
                <p>Rating: {details.rating}</p>
                <Stars>{getStars(details.rating)}</Stars>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {details.platforms?.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                      title={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={smallImage(details.background_image, 1280)}
                alt={`${details.name} background`}
              />
            </Media>
            <Description>{parse(details.description)}</Description>
            <Gallery>
              {details.screenshots?.map((screenshot) => (
                <img
                  src={smallImage(screenshot.image, 1280)}
                  alt="game"
                  key={screenshot.id}
                />
              ))}
            </Gallery>
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
  margin: 1rem 0 1rem 0;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  z-index: 10;
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

const Stars = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  img {
    margin-right: 3px;
  }
`;

const Gallery = styled.div`
  img {
    margin-bottom: 2rem;
  }
`;

export default GameDetail;
