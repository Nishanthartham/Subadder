import React from 'react'

function Menucard(props) {
    return (
        <>  
            <div className='main-card--cointainer'>
        {props.Menu.map((curr_ele) => {
            const {id,image,category,name,description} = curr_ele;//destructuring
            return (
            <div className="card-container">
                <div className="card ">
                    <div className="card-body">
                        <span className="card-author subtle">{category}</span>
                        <span className="card-number card-circle subtle">{id}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description subtle">
                            {description}
                        </span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="images" className="card-media" />

                    <span className="card-tag  subtle">Order Now</span>
                </div>
            </div>
            )})}
            </div>
        </>
    
    )
}

export default Menucard