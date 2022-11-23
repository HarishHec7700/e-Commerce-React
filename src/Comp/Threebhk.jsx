import React,{useState,useEffect} from 'react'
// import CartDispCard from './CartDispCard';
import Dispcard from './Dispcard'


function Threebhk() {
  const [three,setThree]=useState([]);
  const[thcart,setThcart]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/threebhk')
    .then((res)=>{
      if(res.status===200){
        return(res.json());        
      }
      return(false)  
    })
    .then((resp)=>{
      setThree(resp);
      console.log(three)
    })
  },[]);
  let handleClick=(val)=>{
    // console.log(val);
    setThcart([...thcart,val]);
  }
  console.log(thcart);


  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="dis-head">
            <h3>Threebhk Homes</h3>
          </div>
        {
          three.map((val)=>{
            return(
              <div className='one-flex-item col-md-6 col-lg-4'>
              <Dispcard key={val.id} val={val} handleClick={handleClick}/>
             </div>
            )
          })
        }
      </div>
      </div>
    </>
  )
}

export default Threebhk;