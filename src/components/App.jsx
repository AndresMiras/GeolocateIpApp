import React from 'react';
import LocationProvider from '../context/LocationProvider';
import UserRoutes from '../routes/UserRoutes';
import styles from './app.module.scss';

const App = () => {
    return (
        <LocationProvider>
            <UserRoutes/>
        </LocationProvider>
    )
}

export default App;