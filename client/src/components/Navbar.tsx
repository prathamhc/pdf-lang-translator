import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    PDF Translator
                </Link>

                <div className="navbar-menu">
                    {user ? (
                        <>
                            <Link to="/dashboard" className="navbar-item">
                                Dashboard
                            </Link>
                            <Link to="/history" className="navbar-item">
                                History
                            </Link>
                            <span className="navbar-user">
                                Welcome, {user.name}
                            </span>
                            <button onClick={handleLogout} className="navbar-button">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="navbar-item">
                                Login
                            </Link>
                            <Link to="/register" className="navbar-item">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;