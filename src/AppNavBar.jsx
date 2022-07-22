import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material'


const AppNavBar = (props) => {

    var addressDisplay = '';
    if (props.address) {
        addressDisplay = props.address.substring(0,3) + '...' + props.address.substring(props.address.length - 3);
    }

    return (
    <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    siluete
                </Typography>
                {
                    props.address ?
                    !props.hasKey ?
                    <Button color='inherit' onClick={props.getKey}>
                        Get key
                    </Button>
                    :
                    <Typography>
                        🔐
                    </Typography>
                    :
                    <></>
                }
                {
                    !props.address
                    ? 
                    <Button color='inherit' onClick={props.connectWithWallet}>
                    Connect wallet
                    </Button>
                    :
                    <Button color='inherit' onClick={props.disconnect}>
                        Connected: {addressDisplay}
                    </Button>
                }
            </Toolbar>
        </AppBar>
    </Box>
    )
}

export default AppNavBar;