import React from 'react'
import Js from './img/js.png';


const CardPicture = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-title">
                        CardPicture
                    </div>
                    <div className="card-header-icon">
                        IconCard
                    </div>
                </div>
                <div className="card-image">
                    <img src={Js} alt="Js logo"></img>
                </div>
                <div className="card-content">
                    Javascript the Best computer language in the world.
                </div>
            </div>
        </>
    )
}

export default CardPicture
