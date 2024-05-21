import React, { useEffect, useRef } from 'react'

import api from "../../api/axiosConfig"
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from 'react-router-dom';
import { ReviewForm } from '../reviewForm/ReviewForm';

export const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  const labelText = "Write a Review ?"
  let params = useParams();
  const movieId = params.movieId;


  useEffect(() => {
    // calling API
    getMovieData(movieId);
  }, [])

  const addReview = async (e) => {
    //Adds a reviews to state variable
    e.preventDefault();
    const rev = revText.current;
    try {
      const response = await api.post("/api/v1/reviews", { reviewbody: rev.value, imdbId: movieId });
      const updatedReviews = reviews ? [...reviews, { body: rev.value }] : [{ body: rev.value }];
      rev.value = "";
      setReviews(updatedReviews);
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <Container>
      <Row>
        <Col> <h3>Review</h3></Col>
      </Row>
      <Row className='mt-2'>
        <Col>

          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm handleSubmit={addReview} revText={revText} labelText={labelText} defaultValue={""} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews && reviews.map((review, index) => {
            return (
              <Row key={index}>
                <Col>
                  {review.body}
                  <hr />
                </Col>
              </Row>
            )
          })
          }
        </Col>
      </Row>
    </Container>
  )
}
