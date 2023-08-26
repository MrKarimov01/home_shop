import React from 'react'
import './Body.css'
import kravat from './../images/bed.png'
import bathroom from './../images/bathroom.png'
import car from './../images/car.png'
import razmer from './../images/olcham.png'




const Element = (props) => {
  return (
    <div className='Homes'>
        <img src={props.home} className="img-box" />
        <img src={props.egasi} alt="" className="porfile-img" />
        <h3>New Apartment Nice Wiew</h3>
        <h4>Quincy St, Brooklyn, NY, USA</h4>
        <div className="blok-element">
            <div className="box">
                <img src={kravat} />
                <p>8 Beds</p>
            </div>
            <div className="box">
                <img src={bathroom} />
                <p>5 Baths</p>
            </div>
            <div className="box">
                <img src={car} />
                <p>1 Garage</p>
            </div>
            <div className="box">
                <img src={razmer} />
                <p>1200 Sq Ft</p>
            </div>
        </div>
        <i></i>
        <h1>{props.narx}</h1>
        <button>Buy Now</button>
    </div>
  )
}

export default Element