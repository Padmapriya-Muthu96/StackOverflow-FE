import React from "react";
import { Button, Form } from "react-bootstrap";
import { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserRegister.js/UserContext";

const AskQuestion=()=>{

    const formRef = useRef(null);
    const navigate=useNavigate();
    // const { user } = useContext(UserContext);

    const handleAskqus=async(e)=>{
        e.preventDefault()

        let data={
            title:e.target.title.value,
            details:e.target.details.value,
            tags:e.target.tag.value
        }

        try{
            const res=await axios.post(`${process.env.REACT_APP_API_URL}/stack/questions`,data)
            console.log(res);
            if(res.status===201)
            toast.success(res.data.message);
            formRef.current.reset();
            navigate('/stack/questions')

        }
        catch(error){
           toast.error(error);
        }

    }

    return<div className="container-fluid">
        <div className="ask-container">
            
            <div className='ask-wrapper'>
            <h1>Ask a public question</h1>
            <br></br>
            <Form onSubmit={handleAskqus} ref={formRef}>
            <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label" style={{fontSize: "bold x-large"}}><b>Title:</b></Form.Label>
        <p style={{opacity:"0.6"}}>Be specific and imagine you’re asking a question to another person</p>
        <div className="col-sm-10">
        <textarea style={{width:"100%"}} type="text" placeholder="Enter title" name="title"/>
        </div>
      </Form.Group>
      <br></br>
      <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label" style={{fontSize: "bold x-large"}}><b>Details:</b></Form.Label>
        <p style={{opacity:"0.6"}}>Enter your problem details here and what is your expacted output</p>
        <div className="col-sm-10">
        <textarea style={{width:"100%"}} type="text" placeholder="Enter details" name="details"/>
        </div>
      </Form.Group>
      <br></br>
      <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label" style={{fontSize: "bold x-large"}}><b>Tags:</b></Form.Label>
        <p style={{opacity:"0.6"}}>Enter your tags here to identify. eg:HTML, CSS, javascript..</p>
        <div className="col-sm-10">
        <textarea style={{width:"100%"}} type="text" placeholder="Enter tags" name="tag"/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="ask-btn">
        <Button style={{width:'100px',height:'50px'}} type="submit" >Ask</Button>
        </div>
      </Form.Group>
      
            </Form>


            </div>
        </div>
        </div>
}
export default AskQuestion;