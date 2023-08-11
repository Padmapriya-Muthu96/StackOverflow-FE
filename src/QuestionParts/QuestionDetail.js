import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const QuestionsDetail = () => {
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);
  const [answerText, setAnswerText] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      try {

        await axios.put(
            `${process.env.REACT_APP_API_URL}/stack/questions/${questionId}/increment-views`
          );
          
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/stack/questions/${questionId}`
        );
        const fetchedQuestion = res.data.question;
        setQuestion(fetchedQuestion);
      } catch (error) {
        console.log("Error fetching question data. Please try again later.");
      }
    };
    fetchQuestion();
  }, [questionId]);

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    if (!answerText) {
      alert("Please enter your answer before submitting.");
      return;
    }

    try {
      
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/stack/questions/${questionId}/answers`,
        { text: answerText }
      );

      if (response.status === 200) {
        
        const updatedQuestion = { ...question };
        updatedQuestion.answers.push(response.data.answer);
        setQuestion(updatedQuestion);
        setAnswerText(""); 
        alert("Answer posted successfully!");
      }
    } catch (error) {
      console.log("Error posting answer. Please try again later.");
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText) {
      alert("Please enter your comment before submitting.");
      return;
    }

    try {
      
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/stack/questions/${questionId}/comments`,
        { text: commentText }
      );

      if (response.status === 200) {
       
        const updatedQuestion = { ...question };
        updatedQuestion.comments.push(response.data.comments);
        setQuestion(updatedQuestion);
        setCommentText(""); 
        alert("Comment posted successfully!");
      }
    } catch (error) {
      console.log("Error posting comment. Please try again later.");
    }
  };

  const handleUpvote = async () => {
    try {
      
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/stack/questions/${questionId}/upvote`
      );

      if (response.status === 200) {
        
        const updatedQuestion = { ...question };
        updatedQuestion.votes += 1;
        setQuestion(updatedQuestion);
      }
    } catch (error) {
      console.log("Error upvoting the question. Please try again later.");
    }
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{question.title}</h1>
      <p>{question.details}</p>
      <p style={{color:"blue"}}>{question.tags}</p>
      <p>Views: {question.views}</p>
      <div  >
      <p >Votes: {question.votes}</p>

      <Button onClick={handleUpvote} style={{backgroundColor:"#4f6ef7" }}>Upvote</Button></div>
<br></br>
      <form onSubmit={handleAnswerSubmit}>
        <label htmlFor="answer" className="tit-ans" style={{color:"#13ab47", fontSize:"large", }}>Write Your Answer:</label>
        <br></br>
        <br></br>
        <textarea style={{width:"90%"}}
         
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
          required
        ></textarea>
        <br></br>
        <br></br>
        <Button type="submit" style={{backgroundColor:"#4f6ef7" }}>Post Answer</Button>
      </form>
<br></br>
      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="comment" style={{color:"#13ab47", fontSize:"large", }}>Write Your Comment:</label>
        <br></br>
        <br></br>
        <textarea style={{width:"90%"}}
          id="comment"
          name="comment"
          rows="4"
          cols="50"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        ></textarea>
        <br></br><br></br>
        <Button type="submit">Post Comment</Button>
      </form>
<br></br><br></br>
      {question.answers.map((answer, index) => (
        <div key={index}>
          <p>Answer {index + 1}: {answer.text}</p>
        </div>
      ))}

{question.comments.map((comment, index) => (
        <div key={index}>
          <p>Comment {index + 1}: {comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default QuestionsDetail;