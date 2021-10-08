import React from 'react'
import Js from './img/js.png';


const CardPicture = () => {
    return (
        <>
            <div className="container has-text-centered">
                <div className="columns is-mobile is-centered">
                    <div className="column is-2">
                        <div className="card">
                            <figure className="image is-square">
                                <img src={Js} alt="Js logo"></img>
                            </figure>
                            <div className="card-content">
                                JS the Best computer language in the world.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPicture
