
import React from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import {stays} from '../assets/stayss.js'
import './StayScreen.css'
import './Stays.css'
export const StayScreen = () => {

    const {id} =useParams()
    // const idReal = id + 1;
    const {city,country,superHost,beds,photo,rating,title,type,maxGuests} = stays[(id - 1)];

    if (id > 11) {
        return <Redirect to="/"/>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                <Link to='/'><button className="btn btn-red mb-4"><i className="fas fa-arrow-left"></i></button></Link>
                    <img className="img-thumbnail animate__animated animate__bounceInLeft" alt="" src={photo}></img>
                </div>

                <div className="col-md-4">
                    <p className="text-center title">{title} </p>
                    <hr/>
                    <p className="texts"><i className="fas fa-thumbtack star-color"></i> {`It is ubicated in ${city}, ${country}`}</p>
                    <hr/>
                    <p className="texts"><i className="fas fa-umbrella-beach star-color"></i> {`You can enjoy an ${type}`}</p>
                    <hr/>
                    {( beds !== null) && <p className="texts"><i className="fas fa-bed star-color"></i> {`${beds} Beds`}</p>}
                    {(beds !== null) && <hr/>}
                    <p><i className="fas fa-user-friends star-color"></i> {`This is only for ${maxGuests} peoples`}</p>
                    {(superHost) && <span className="superhost">SuperHost</span>}
                    <hr/>
                    <span className="colorb"><i className="fas fa-star star-color"></i>{rating}</span>
                </div>
            </div>
        </div>
    )
}
