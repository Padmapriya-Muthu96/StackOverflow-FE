import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";


const Questions=()=>{

    const [myquestions, setMyquestions] = useState([]);
    
   

    useEffect(() => {
      const fetchQus = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/stack/questions`);
          console.log(res);
          const fetchedQus = res.data.questions;
          console.log(fetchedQus)
          setMyquestions(fetchedQus);
        } catch (error) {
          console.log('Error fetching user data. Please try again later.')
        }
      };
      fetchQus();
    }, []);

   
    return(
        <div>
            <h1>All Questions</h1>

            <Link to='/stack/questions/ask-questions'>
                <div className="askqus-btn">
                <Button>Ask Question</Button>
                </div>
            </Link>

            <div className="users-container">
    <div className="row">
      {myquestions.map((questions, index) => (
        <Card  className="users-card col-md-12 " key={index} >
          
          
          <Card.Body style={{backgroundColor:"rgb(228, 191, 191)"}}>
          
          {/* <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU' style={{ width: '150px', height: '150px', margin: '1rem' }}/> */}
            <Link to={`/stack/questions/${questions._id}`}>
            <Card.Title>{questions.title}</Card.Title></Link>
            <Card.Text>{questions.details}</Card.Text>
            <Card.Text style={{color:"blue"}}>{questions.tags}</Card.Text>
            <div className="vi-vo" style={{display:"flex",paddingRight:"5px"}}>
            <Card.Text><Button style={{paddingRight:"5px"}}>Views: {questions.views}</Button></Card.Text>
            <br></br>
            <Card.Text><Button>Votes: {questions.votes}</Button></Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
        </div>
        
    )
}
export default Questions;