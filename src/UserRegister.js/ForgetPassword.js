import React  from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import axios from "axios";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";

import { useRef } from "react";


const ForgetPassword=()=>{

    const formRef = useRef(null);
let navigate=useNavigate();

    const handleForgetPassword=async(e)=>{
        e.preventDefault()

    let data={
      email:e.target.email.value,
       }

    try{
            const res=await axios.post(`${process.env.REACT_APP_API_URL}/stack/forgot-password`,data)
            console.log(res);
            if(res.status===200)
            {
                toast.success(res.data.message)
                formRef.current.reset();
                navigate('/stack/reset-password')
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
    <h1 className='title'>Forget Password</h1>
    <br></br>
    <Form onSubmit={handleForgetPassword} ref={formRef}>
      
   <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label">Email:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="email" placeholder="Enter email" name="email"/>
        </div>
      </Form.Group>
      <br></br>
      
      
      <div className="butdiv">
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </div>
      <br></br>
      
      
    </Form>
    </div>
  </div>
    
}
export default ForgetPassword;
