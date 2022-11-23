import React,{useEffect,useState} from 'react'
import Dispcard from './Dispcard';

function Twobhk() {
  const [two,setTwo]=useState([]);
  const [twcart,setTwcart]=useState([]);
  // Fetching the data from fake server by using Use effect 
  
  useEffect(()=>{
    fetch('http://localhost:3000/twobhk')
    .then((res)=>{
      if(res.status===200){
        return res.json();
      }
      // return false
    })
    .then((resp)=>{
      setTwo(resp);
    })
  },[])
  // console.log(two);
  const handleClick=(val)=>{
    setTwcart([...twcart,val]);
  }
  console.log(twcart);

  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="dis-head">
            <h3>Twobhk Homes</h3>
          </div>
        {
          two.map((val)=>{
            return(<div className='one-flex-item col-md-6 col-lg-4'>
              <Dispcard val={val} key={val.id} handleClick={()=>handleClick(val)} />
             </div>
              )
          })
        }
         </div>
      </div>
    </>    
  )
}

export default Twobhk