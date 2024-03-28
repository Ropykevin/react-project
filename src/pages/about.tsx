import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AboutUs: React.FC = () => {
    const [testState, setTestState] = useState([
        {
            name: 'some name'
        }
    ]);
    let navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/home');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1>About Us</h1>
                    <p>Welcome to our techCamp!</p>
                    <p>At our school, we're dedicated to providing high-quality education in various technology fields.</p>
                    <p>Our mission is to empower individuals with the knowledge and skills they need to succeed in the fast-paced world of technology.</p>
                    <p>Whether you're a beginner looking to start your journey in tech or an experienced professional seeking to enhance your skills, we have courses tailored to meet your needs.</p>
                    <p>Join us today and take the first step towards a rewarding career in technology!</p>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary mr-2" onClick={handleAboutClick}>Home</button>
                    <button className="btn btn-primary" onClick={handleContactClick}>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
