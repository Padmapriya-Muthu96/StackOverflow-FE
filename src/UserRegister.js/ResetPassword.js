import React  from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import axios from "axios";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";

import { useRef } from "react";

const ResetPassword=()=>{
  const formRef = useRef(null);


  let navigate=useNavigate();

  const handleResetPassword=async(e)=>{
      e.preventDefault()

  let data={

      
    resetToken:e.target.resetToken.value,
    newPassword:e.target.newPassword.value,
     

  }

  try{
          const res=await axios.post(`${process.env.REACT_APP_API_URL}/stack/reset-password`,data)
          console.log(res);
          if(res.status===200)
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
  <h1 className='title'>Reset Password</h1>
  <br></br>
  <Form onSubmit={handleResetPassword} ref={formRef}>
    
 <Form.Group className="form-group row" >
      <Form.Label class="col-sm-2 col-form-label">Reset Token:</Form.Label>
      <div className="col-sm-10">
      <Form.Control type="text" placeholder="Enter email" name="resetToken"/>
      </div>
    </Form.Group>
    <br></br>
    <Form.Group className="form-group row" >
      <Form.Label class="col-sm-2 col-form-label">New Password:</Form.Label>
      <div className="col-sm-10">
      <Form.Control type="text" placeholder="Enter email" name="newPassword"/>
      </div>
    </Form.Group>
    
    
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

export default ResetPassword;