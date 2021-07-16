import React from 'react'
import { Link } from 'react-router-dom'


export const StayItem = ({ stay }) => {

    return (
        <div className="col-md-4  " key={stay.id}>
            <Link to={`/stay/${stay.id}`} className="text-decoration-none ">
            <div className="card mb-4 border-0 rounded" >
                <img className="card-img-top m-2 border-r " loading="lazy" src={stay.photo} alt=""></img>
                <div className="card-body ">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        {(stay.superHost) && <span className="superhost">SuperHost</span>}
                        <p className="m-0 color">{stay.type}</p>
                        <span className="colorb"><i className="fas fa-star star-color"></i>{stay.rating}</span>
                    </div>
                    <span className="card-title mt-3 colorb mb-3">{stay.title}</span>
                </div>
            </div>
            </Link>
        </div>
    )
}
