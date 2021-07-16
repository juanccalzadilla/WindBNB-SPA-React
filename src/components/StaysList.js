import React from 'react'
import '../components/Stays.css';
import { StayItem } from './StayItem';

const stays = require('../assets/stays.json')


export const StaysList = () => {


    return (
        <div className="container">
            <div className="row m-auto animate__animated animate__fadeIn">
                <div className="d-flex justify-content-between">
                <h4 className="p-0"> Stays in Findland</h4>     
                <span>{stays.length}+ stays</span>
                </div>
                    {stays.map(stay =>(
                    <StayItem stay={stay} key={stay.id}/>
                    ))}
                    
            </div>

        </div>
    )
}
