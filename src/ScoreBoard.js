import React from 'react'
import Angular from './img/angular.png';

const ScoreBoard = () => {
    return (
        <div className="container mb-4 navbar has-background-link has-text-white">
            <h2>Zoo Memory Game</h2>
            <div className="navbar-end">
                <h6>Score: </h6>
                <h6 className="is-bellow">Best Score: </h6>
                <img src={Angular} alt='angular' />
            </div>
            
        </div>
    )
}

export default ScoreBoard
