import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material'

const AppNavBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    siluete
                </Typography>
                <Button color='inherit'>
                    Connect wallet
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
    )
}

export default AppNavBar;