import React, { useState, useEffect } from 'react'

const ScoreBoard = () => {
    const [score, setScore] = useState(0)

    return (
        <div className="has-background-link">
            <div className="container mb-6 navbar has-background-link">
                <h2 className="is-size-3 has-text-white">Zoo Memory Game</h2>
                <div className="navbar-end has-text-white">
                    <h6 className="is-size-4">Score: {score} </h6>
                    <h6 className=" is-size-4 is-bellow">Best Score: {score}</h6>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard
