import React from 'react'
import Pictures from './img/';


const CardPicture = ({ card }) => {
    console.log(Pictures)
    return (
        <>  
        Pictures.map((picture) => (
            <div className="container has-text-centered">
                <div className="columns is-mobile is-centered">
                    <div className="column is-2">
                        <div className="card">
                            <figure className="image is-square">
                               
                            </figure>
                            <div className="title is-4">
                                Javascript
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
            
        </>
    )
}

export default CardPicture
