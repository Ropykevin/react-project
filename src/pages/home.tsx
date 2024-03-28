import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [testState, setTestState] = useState([
        {
            name: 'some name'
        }
    ]);
    let navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/about');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="mb-4">H ome Page</h1>
                    <p>Welcome to the home page!</p>
                    <p>Explore our latest courses and workshops.</p>
                    <p>Join our community of tech enthusiasts and learners.</p>
                    <p>Stay updated with our upcoming events and announcements.</p>
                    <div className="mt-3">
                        <button className="btn btn-primary mr-2" onClick={handleAboutClick}>About</button>
                        <button className="btn btn-primary" onClick={handleContactClick}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
