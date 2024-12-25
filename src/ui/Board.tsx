﻿import {MouseEventHandler, useState} from "react";

type squareType = {
    value: number,
    onSquareClick: MouseEventHandler<HTMLButtonElement>
}

function Square({value, onSquareClick}: squareType) {
    return (
        <button
            className="border h-16 w-16 flex items-center justify-center"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function PrintState() {
        console.log(...squares);
    }

    function handleClick(i: number) {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        setSquares(nextSquares);
        console.log(...nextSquares);
        PrintState();
    }

    return (
        <>
            <div className="m-4 text-4xl flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                </div>
                <div className="flex flex-row gap-2">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                </div>
                <div className="flex flex-row gap-2">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
                </div>
            </div>
        </>
    );
}
