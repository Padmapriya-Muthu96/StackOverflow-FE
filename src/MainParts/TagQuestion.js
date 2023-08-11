import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const TagQuestions = () => {
  const { tagKeyword } = useParams();
  const [taggedQuestions, setTaggedQuestions] = useState([]);

  useEffect(() => {
    const fetchTaggedQuestions = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/stack/questions/tag/${tagKeyword}`);
        console.log(res);
        const fetchedTaggedQuestions = res.data.questions;
        setTaggedQuestions(fetchedTaggedQuestions);
      } catch (error) {
        console.log('Error fetching tagged questions. Please try again later.')
      }
    };
    fetchTaggedQuestions();
  }, [tagKeyword]);

  return (
    <div>
      <h1>Questions tagged with: {tagKeyword}</h1>

      <div className="users-container">
        <div className="row">
          {taggedQuestions.map((question, index) => (
            <Card className="users-card col-md-12 " key={index}>
              <Card.Body style={{ backgroundColor: "rgb(228, 191, 191)" }}>
                <Link to={`/stack/questions/${question._id}`}>
                  <Card.Title>{question.title}</Card.Title>
                </Link>
                <Card.Text>{question.details}</Card.Text>
                <Card.Text style={{ color: "blue" }}>{question.tags}</Card.Text>
                <div className="vi-vo" style={{ display: "flex", paddingRight: "5px" }}>
                  <Card.Text><Button style={{ paddingRight: "5px" }}>Views: {question.views}</Button></Card.Text>
                  <br />
                  <Card.Text><Button>Votes: {question.votes}</Button></Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagQuestions;