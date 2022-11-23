import React,{useEffect,useState} from 'react'
import Cart from './Cart';
import Dispcard from './Dispcard';

function Villa() {
  const [villa,setVilla]=useState([]);
  const[vicart,setVicart]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/villa')
    .then((res)=>{
      if(res.status===200){
        return(res.json());   
      }
      return(false); 
    })
    .then((res)=>{
      // console.log(res);
      setVilla(res);
    })
  },[]);
  const handleClick=(val)=>{
    // console.log('Hi ');
    setVicart([...vicart,val]);
  }
  console.log(vicart);
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="dis-head">
            <h3>Villa Homes</h3>
          </div>
        {
          villa.map((val)=>{
            return(<div className='one-flex-item col-md-6 col-lg-4'>
              <Dispcard val={val} key={val.id} handleClick={()=>handleClick(val)} /></div>
              )  
          })
        }
        </div>
      </div>
    </>
    )
}

export default Villa