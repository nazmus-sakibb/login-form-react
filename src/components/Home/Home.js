import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="header-container">
            <div style={{height: '600px'}} className="d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#203047'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto ipsa distinctio rem quas sit.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                {/* <img src={chair} alt="" className="img-fluid"/> */}
            </div>
        </div>
        </div>
    );
};

export default Home;