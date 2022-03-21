import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to Music Talk!</h1>
            <p className="lead">Keeping informed on what's happening in the Irish music scene.</p>
            <hr className="my-4" />
            <p>Click the button below to check out our blog.</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out our articles</Link>
        </div>
    </div>
);

export default home;