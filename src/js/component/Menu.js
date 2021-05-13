// import React, { useState } from "react";
// import Board from "./Board";

// export function Menu() {
// 	let [display, setdisplay] = useState("block");
// 	let [displayBoard, setdisplayBoard] = useState("none");
// 	let [firstTurn, setfirstTurn] = useState();

// 	const ShowBoard = turn => {
// 		setdisplay("none");
// 		setdisplayBoard("block");
// 		setfirstTurn(turn);
// 		ShowBoard();
// 	};

// 	const IBoard = () => {
// 		return <Board firstTurn={firstTurn} style={displayBoard} />;
// 	};

// 	return (
// 		<div className="text-center mt-5">
// 			<h1 className="text-white">Tic Tac Toe in React.js</h1>
// 			<h3 className="text-white" style={{ display: display }}>
// 				Pic A Weapon
// 			</h3>
// 			<div className="p-5 mt-5">
// 				<h6 className="text-white">
// 					<b>CHOOSE YOUR WEAPON</b>
// 				</h6>
// 				<br />
// 				<button
// 					className="btn mr-2 mt-2"
// 					onClick={() => ShowBoard(true)}>
// 					X
// 				</button>
// 				<button
// 					className="btn ml-2 mt-2"
// 					onClick={() => ShowBoard(false)}>
// 					O
// 				</button>
// 			</div>
// 			<IBoard />
// 		</div>
// 	);
// }
