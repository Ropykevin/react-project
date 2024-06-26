import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkstatus from './checkstatus';


const Contact: React.FC = () => {
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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can handle form submission logic here, like sending data to a server
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container mt-5">
            <Checkstatus />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="mb-4">Contact Page</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message:</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary mr-2" onClick={handleAboutClick}>About</button>
                    <button className="btn btn-primary" onClick={handleContactClick}>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
