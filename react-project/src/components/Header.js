import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <span>ToDo List</span>
            <button onClick={() => navigate("about")}>About</button>
        </header>
    );
};

export default Header;