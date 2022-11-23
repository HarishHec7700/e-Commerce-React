// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Dispcard from './Dispcard'

function Onebhk() {
  const [one, setOne] = useState([]);
  const [oncart,setOncart]=useState([])
  useEffect(() => {
    fetch('http://localhost:3000/onebhk')
      .then((res) => {
        if (res.status === 200) {
          // console.log('hi');
          return res.json();
        }
        return false
      })
      .then((resp) => {
        // console.log(res);
        setOne(resp);
        // console.log(resp);
      });
  }, []);

  const handleClick=(val)=>{
    // console.log("hi");
    setOncart([...oncart,val])

  }
  console.log(oncart);
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/todos")
  //   .then((res)=>{console.log(res)}) 
  // },[])

  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="dis-head">
            <h3>Onebhk Homes</h3>
          </div>
          {one.map((val) => {
           return (<div className='one-flex-item col-md-6 col-lg-4'>
            <Dispcard val={val} key={val.id} handleClick={()=>handleClick(val)} />
            </div>)
          })}
        </div>
      </div>
    </>
  )
}

export default Onebhk