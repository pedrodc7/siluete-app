import { Box } from '@mui/material';
import React from 'react';
import InfoMint from './InfoMint';
import Intro from './Intro';
import History from './History';
import AppNavBar from './AppNavBar';
import AppFooter from './AppFooter';
import { useAddress, useMetamask, useDisconnect} from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';
import useAuthenticate from './hooks/useAuthenticate.ts';
import useTesting from './hooks/useTesting.ts';


const App = () => {


    // use the hooks thirdweb give us
    const address = useAddress();
    const disconnect = useDisconnect();
    const connectWithMetamask = useMetamask();    
    const { login, authenticate, logout } = useAuthenticate();
    const { getSomething } = useTesting();
    const [authMessage, setAuthMessage] = useState("N/A");

    const [encryptionKey, setEncryptionKey] = useState('');
    const [isLoggingdIn, setIsLoggingdIn] = useState(false);
    const [hasKey, setHasKey] = useState(false);

    const getKey = async () => {
        if (!isLoggingdIn) {
            setIsLoggingdIn(true)
            await login();
        }
        const res = await authenticate();
        if (res.ok) {
          const address = await res.json();
          setAuthMessage(`Succesfully authenticated to backend with address ${address}`);
        } else {
          setAuthMessage(`Failed to authenticate, backend responded with ${res.status} (${res.statusText})`);
        }
        console.log(authMessage);

        /* have to fill this one in */
        setHasKey(true)
        // will we need the key in the front end? maybe backend could do all the NFT minting and encryption...
        setEncryptionKey('THE KEY WILL GO HERE')
    };

    const authenticatedRequest = async () => {
      }

    // useEffect(()=> {
    //     const res = getSomething();
    //     console.log(res);
    // });


    return (
        <>
            <AppNavBar 
                address={address}
                connectWithWallet={connectWithMetamask}
                disconnect={disconnect}
                hasKey={hasKey}
                getKey={getKey}
            />
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