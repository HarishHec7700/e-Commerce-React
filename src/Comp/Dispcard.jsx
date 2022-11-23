import React from 'react'

function Dispcard({ val ,handleClick}) {
  return (
    <>
      <div className="card dis-card ">
        <img className="card-img-top dis-img" alt="Property Image" src={val.img}></img>
        <div className="card-body">
          <h5 className='card-title'>
            {val.name}
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{val.address}</li>
          <li className="list-group-item">Club : {val.club}</li>
          <li className="list-group-item">Pin : {val.pin}</li>
          <li className="list-group-item">Just {val.price}</li>
        </ul>
        <div className="card-body">
          <button className="card-link" onClick={()=>handleClick(val)}> Add to Wish list</button>
          {/* <a href="#" className="card-link">Buy Now</a> */}
        </div>
      </div>
    </>
  )
}

export default Dispcard