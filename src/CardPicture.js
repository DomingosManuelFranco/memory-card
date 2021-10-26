import React from 'react'
//import Reactjs from './img/react.png';




const CardPicture = (props) => {
    console.log(props)
    return (
        <>  
            <div className="column is-2">
                <div className="card">
                    <figure className="image is-square">
                        <img src={props.img} alt="pictures" />
                    </figure>
                    <div className="title is-4">
                            {props.name}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPicture
