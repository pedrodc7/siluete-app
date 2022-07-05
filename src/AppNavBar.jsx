import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material'
import { useAddress, useMetamask } from '@thirdweb-dev/react';


const AppNavBar = () => {


    // use the hooks thirdweb give us
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    console.log("Address: ", address);

    // no walled connect yet to the app, let the user connect one
    if (!address) {
        
    }

  return (
    <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    siluete
                </Typography>
                {
                    !address
                    ? 
                    <Button color='inherit' onClick={connectWithMetamask}>
                    Connect wallet
                    </Button>
                    :
                    <Typography>Connected</Typography>
                }
            </Toolbar>
        </AppBar>
    </Box>
    )
}

export default AppNavBar;