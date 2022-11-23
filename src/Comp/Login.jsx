import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../Images/logo.png'

function Login() {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const navi=useNavigate();
    
    const emailHandler=(e)=>{
        setEmail(e.target.value);
    },
    passHandler=(e)=>{
        setPass(e.target.value);
    },
    subHandler=(e)=>{
        e.preventDefault();
        console.log("Hi");
        if((email.includes("@"))&&(pass.length>8)){
            console.log("success");
            navi('/homepage');
        }else{
            alert("Enter the Correct Details");
        }
    }

  return (
    <>
        <section className="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 d-flex justify-content-center">
                        <div className="workarea">
                            <div className="form-head d-flex justify-content-center">
                                <img src={logo} alt="Company Logo" />
                            </div>
                            <form action="" onSubmit={subHandler} className="login-form">
                                <h2>Login</h2>
                                <input type="text" className="inp" placeholder='Email*' onChange={emailHandler}/><br></br>
                                <input type="password" className="inp" placeholder='Password*' onChange={passHandler} /><br />
                                <button typeof="submit" className="login-btn">LOGIN </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Login