import React from 'react';

const UserInfoCard = ({ onClearUserData }) => {
    const handleClearUserData = () => {
        // Clear the session storage
        sessionStorage.removeItem('userData');
        // Call the callback function to notify the parent component
        onClearUserData();
    };

    // Retrieve user data from session storage
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (!userData) return <div>No user information saved.</div>;

    return (
        <div className="card">
            <div className="card-body user-info-card">
                <p className="card-text-user"><strong>Nombre:</strong> {userData.name}</p>
                <p className="card-text-user"><strong>Email:</strong> {userData.email}</p>
                <p className="card-text-user"><strong>Teléfono:</strong> {userData.phone}</p>
                <button onClick={handleClearUserData} className="btn btn-danger">Borrar Datos</button>
            </div>
        </div>
    );
};

export default UserInfoCard;
