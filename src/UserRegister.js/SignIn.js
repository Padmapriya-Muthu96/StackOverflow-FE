import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const SignIn = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
   const { setUser } = useContext(UserContext);

  const handleSignin = async (e) => {
    e.preventDefault();

    let data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/stack/login`, data);
      console.log(res);
      if (res.status === 200) {
        toast.success(res.data.message);
        formRef.current.reset();
         setUser(res.data.user); 
        navigate("/stack/questions");
      }
    } catch (error) {
      toast.error(error.response.data.error || error.response.data.message);
    }
  };

  return (
    <div className="container-fluid">
     <div className="signup-wrapper">
      <h1 className="title">Sign In</h1>
      <br></br>
        <Form onSubmit={handleSignin} ref={formRef}>

       
       <Form.Group className="form-group row" >
        <Form.Label className="col-sm-2 col-form-label">Email:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="email" placeholder="Enter email" name="email"/>
        </div>
      </Form.Group>
      <br></br>
      <Form.Group className="form-group row" >
        <Form.Label className="col-sm-2 col-form-label">Password:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="password" placeholder="Password" name="password"/>
        </div>
      </Form.Group>
      <br></br>
          <Button  className="sub-btn" variant="primary" type="submit" >
            Submit
          </Button>
          <br></br>
          <br></br>
          <p>
            Don't have an account? <Link to="/stack/sign-up">Sign up</Link>
          </p>
          <p>
            Forget Your password? <Link to="/stack/forget-password">Forget Password</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;