import React, { useState } from "react";
import Board from "./Board";

export function Home() {
	let [display, setdisplay] = useState("block");
	let [displayBoard, setdisplayBoard] = useState("none");
	let [firstTurn, setfirstTurn] = useState();

	const ShowBoard = turn => {
		setdisplay("none");
		setdisplayBoard("block");
		setfirstTurn(turn);
		IBoard();
	};

	const IBoard = () => {
		return <Board firstTurn={firstTurn} clase={displayBoard} />;
	};

	return (
		<div className="container text-center mt-5">
			<div style={{ display: display }}>
				<div className=" p-5 mt-5">
					<h1>CHOOSE YOUR WEAPON</h1>
					<div className="col aling-center">
						<button
							className="btn btn-w btn-success  mr-2 mt-2"
							onClick={() => ShowBoard(true)}>
							X
						</button>
						<button
							className="btn btn-w btn-danger  ml-2 mt-2"
							onClick={() => ShowBoard(false)}>
							O
						</button>
					</div>
				</div>
			</div>
			<IBoard />
		</div>
	);
}
