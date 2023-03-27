import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();
    const goBack = () => { navigate(-1) };

    return (
        <div>
            <h2>About</h2>
            <span onClick={() => goBack()}>Ok</span>
        </div>
    );
};

export default About;