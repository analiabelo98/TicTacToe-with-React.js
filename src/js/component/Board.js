import React, { useState, Fragment } from "react";
import Square from "./square";
import PropTypes from "prop-types";

import Home from "./home";

const Board = props => {
	const empty = ["", "", "", "", "", "", "", "", ""];
	//useState de cuadrados
	const [squares, setSquare] = useState(empty);
	//useState para los turnos
	const [turn, setTurn] = useState(props.firstTurn);
	const [display, setdisplay] = useState("d-none");

	//From React documentation
	function calculateWinner() {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}

	let play = position => {
		const copyArr = [...squares];
		//const arrCopy = game.slice()
		//console.log(copyArr);
		copyArr[position] = turn ? "X" : "O";

		setSquare(copyArr);

		//si turno es true = X y luego pasa a ser false = O
		setTurn(!turn);
	};

	const Winner = () => {
		let GotWinner = calculateWinner(squares);
		if (GotWinner) {
			setdisplay("d-block");
			return <h3 className="text-success">{turn ? "O" : "X"} WINNER!</h3>;
		} else {
			return (
				<h3 className="text-danger">it is {turn ? "X" : "O"} turn</h3>
			);
		}
	};

	//funcion que limpia el tablero
	const Clean = () => {
		setSquare(["", "", "", "", "", "", "", "", ""]);
		setTurn(turn);
		setdisplay("d-none");
	};

	return (
		<div className="container" style={{ display: props.clase }}>
			<h1>Tic Tac Toe in React.js</h1>
			<Winner />
			<div className="row">
				<Square value={squares[0]} onClick={() => play(0)} />
				<Square value={squares[1]} onClick={() => play(1)} />
				<Square value={squares[2]} onClick={() => play(2)} />
			</div>
			<div className="row">
				<Square value={squares[3]} onClick={() => play(3)} />
				<Square value={squares[4]} onClick={() => play(4)} />
				<Square value={squares[5]} onClick={() => play(5)} />
			</div>
			<div className="row">
				<Square value={squares[6]} onClick={() => play(6)} />
				<Square value={squares[7]} onClick={() => play(7)} />
				<Square value={squares[8]} onClick={() => play(8)} />
			</div>
			<button
				className={"btn btn-success btn-lg " + display}
				onClick={() => {
					Clean();
				}}>
				click
			</button>
		</div>
	);
};
Board.propTypes = {
	clase: PropTypes.string,
	firstTurn: PropTypes.bool
};
export default Board;
