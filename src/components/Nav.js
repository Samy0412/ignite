import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";

//Redux and routes
import { fetchSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";

function Nav() {
  //upload search results
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitHandler = (e) => {
    dispatch(fetchSearch(textInput));
    setTextInput("");
    e.preventDefault();
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <Stylednav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src=".././img/logo.svg" alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={submitHandler}>
        <input type="text" onChange={inputHandler} value={textInput} />
        <button type="submit">Search</button>
      </form>
    </Stylednav>
  );
}

const Stylednav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
export default Nav;
