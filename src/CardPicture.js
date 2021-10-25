import React from 'react'




const CardPicture = (props) => {
    console.log(props)
    return (
        <>  
            <div className="container has-text-centered">
                <div className="columns is-mobile is-centered">
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
                </div>
            </div>
        </>
    )
}

export default CardPicture
