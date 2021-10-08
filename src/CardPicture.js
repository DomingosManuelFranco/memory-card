import React from 'react'
import Js from './img/js.png';


const CardPicture = () => {
    return (
        <>
            <div className="container is-max-desktop">
                <div className="card">
                   
                    <div className="card-image">
                        <img src={Js} alt="Js logo"></img>
                    </div>
                    <div className="card-content">
                        Javascript the Best computer language in the world.
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPicture
