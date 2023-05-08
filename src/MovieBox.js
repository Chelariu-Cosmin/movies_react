import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox =({title, poster_path, vote_average, release_date, overview})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
              <img className="card-img-top" src={API_IMG+poster_path} />
              <div className="card-body">
                  <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'12rem', marginLeft:'9rem'}}src={API_IMG+poster_path} />
                      <h3>{title}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                            <div className='recommended'>
                                { vote_average  >= 7.9 ? (
                                    <h2>You should watch this movie!</h2>
                                ) : (
                                    <h2>It is not recommended to watch!</h2>
                                )}
                            </div>
                            {/* <br /> */}
                      <h6>Overview</h6>
                   
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MovieBox;