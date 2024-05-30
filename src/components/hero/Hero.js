
import React from 'react'
import "./Hero.css"
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Loader } from '../Loader/Loader'

export const Hero = ({ movies }) => {
    const navigate = useNavigate();
    function reviews(movieId) {
        // redirect to path /Reviews/${movieId}
        navigate(`/Reviews/${movieId}`);
    }
    return (
        <>
            {
                <div className="movie-carousel-container">
                    <Carousel>
                        {movies ?
                            movies.map((movie, index) => {
                                return (
                                    <Paper key={index}>
                                        <div className='movie-card-container'>
                                            <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                                <div className="movie-detail">
                                                    <div className="movie-poster">
                                                        <img src={movie.poster} alt="" />
                                                    </div>
                                                    <div className="movie-title">
                                                        <h4>{movie.title}</h4>
                                                    </div>
                                                    <div className="movie-buttons-container">
                                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                            <div className="play-button-icon-container">
                                                                <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay} />
                                                            </div>
                                                        </Link>
                                                        <div className="movie-review-button-container">
                                                            <Button
                                                                variant='info'
                                                                onClick={() => {
                                                                    reviews(movie.imdbId)
                                                                }}
                                                            >Review</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </Paper>
                                )
                            })
                            :
                            <Loader/>
                        }

                    </Carousel>
                </div>
            }
        </>
    )
}