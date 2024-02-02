import React from 'react'
import  person from "./ProfileImage/media.png"
import fb from "./ProfileImage/facebook.png"
import ins from "./ProfileImage/instagram.png"
import twi from "./ProfileImage/twitter.png"


import "./Image.css"


function Profile() {
    return (

      

        <div>
        <div class="card">
  <img class="imgs" src={person}/>
  <div class="card-body">
    <p class="card-text">
      <p className='name'>John Doe</p>
      <p>CEO</p>
      <div className='social'>
    <a href="#" ><img src={fb}/></a>
    <a href="#" ><img src={ins}/></a>
    <a href="#" ><img src={twi}/></a>
    </div>
    </p>
  </div>
</div>
    {/* <div class="card" style={{width: "10rem"}}>
  <img src={person} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">John Doe</h5>
    <p class="card-text">CEO</p>
    <div className='social'>
    <a href="#" ><img src={fb}/></a>
    <a href="#" ><img src={ins}/></a>
    <a href="#" ><img src={twi}/></a>
    </div>
    
  </div>
</div> */}

        </div>
    )
}

export default Profile