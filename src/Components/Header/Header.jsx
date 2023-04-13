import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/"> home</Link>
            <Link to="login"> log in</Link>

        </div>
    );
};

export default Header;