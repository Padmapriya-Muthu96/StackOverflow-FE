import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const SearchResults = () => {
  const [questions, setQuestions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchSearchResults = async () => {
      const searchParams = new URLSearchParams(location.search);
      const keyword = searchParams.get("keyword");

      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/stack/search?keyword=${keyword}`);
        console.log(res);
        const fetchedQuestions = res.data.questions;
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchResults();
  }, [location.search]);

  return (
    <div>
      <h1>Search Results</h1>
      <div className="users-container">
        <div className="row">
          {questions.map((question) => (
            <Card className="users-card col-md-12" key={question._id}>
              <Card.Body>
                <Link to={`/stack/questions/${question._id}`}>
                  <Card.Title>{question.title}</Card.Title>
                </Link>
                <Card.Text>{question.details}</Card.Text>
                <Card.Text>{question.tags}</Card.Text>
                <Card.Text>Views: {question.views}</Card.Text>
                <Card.Text>Votes: {question.votes}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;