import React, { useState, useEffect } from 'react';
import MisDatosForm from '../views/MisDatosForm';
import UserInfoCard from './UserInfoCard';

const UserDataManager = () => {
    const [userDataPresent, setUserDataPresent] = useState(false);

    useEffect(() => {
        const userData = sessionStorage.getItem('userData');
        setUserDataPresent(!!userData);
    }, []);

    const handleClearUserData = () => {
        setUserDataPresent(false);
    };

    return (
        <div>
            {userDataPresent ? (
                <UserInfoCard onClearUserData={handleClearUserData} />
            ) : (
                <MisDatosForm />
            )}
        </div>
    );
};

export default UserDataManager;