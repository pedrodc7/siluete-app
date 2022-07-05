import { Box } from '@mui/material';
import React from 'react';
import InfoMint from './InfoMint';
import Intro from './Intro';
import History from './History';
import AppNavBar from './AppNavBar';
import AppFooter from './AppFooter';

const App = () => {
    return (
        <>
            <AppNavBar/>
            <Box p={10}>
                <Intro />
                <InfoMint />
                <History />
            </Box>
            <AppFooter/>
        </>
    );
}

export default App;