import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp=()=>{

 const formRef = useRef(null);
 let navigate=useNavigate();

    const handleSignup=async(e)=>{
        e.preventDefault()

    let data={

        username:e.target.username.value,
        email:e.target.email.value,
        password:e.target.password.value

    }

    try{
            const res=await axios.post(`${process.env.REACT_APP_API_URL}/stack/register`,data)
            console.log(res);
            if(res.status===201)
            {
                toast.success(res.data.message)
                formRef.current.reset();
                navigate('/stack/sign-in')
        } 
      }
      catch (error) {
             toast.error(error.response.data.error || error.response.data.message)
        }
    }

    

    return<div className='container-fluid' >
    

      <div className="titlediv">
    
    </div>
    <div className='signup-wrapper'>
    <h1 className='title'>Sign Up</h1>
    <br></br>
    <Form onSubmit={handleSignup} ref={formRef}>
      
   
    
    <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label">Name:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="text" placeholder="Enter Name" name="username"/>
        </div>
      </Form.Group>
      <br></br>
      
      
      <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label">Email:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="email" placeholder="Enter email" name="email"/>
        </div>
      </Form.Group>
      <br></br>
      <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label">Password:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="password" placeholder="Password" name="password"/>
        </div>
      </Form.Group>
      <br></br>
      <div className="butdiv">
      <Button  className="sub-btn" variant="primary" type="submit" >
        Submit
      </Button>
      </div>
      <br></br>
      <br></br>
      <div className="linkdiv">
      <p>Alreay have Account? <Link to="/stack/sign-in" className="btn btn-link">Sign In</Link></p>
      </div>
    </Form>
    </div>
  </div>
}
export default SignUp;