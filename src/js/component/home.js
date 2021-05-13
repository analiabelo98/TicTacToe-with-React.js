import React from "react";
import Square from "./square";
import Board from "./Board.js";

const Home = () => {
	return (
		<div className="container text-center">
			<h1>TIC TAC TOE WITH REACT.JS</h1>

			<Board />
		</div>
	);
};

export default Home;
