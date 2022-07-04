import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import  {Button} from '@mui/material';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const InfoMint = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    return (
        <>
        <Box sx={{ p: 2, border: '1px dashed grey' }} my={4}>
        <Typography variant="h4" yp={2}>
            Information items
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItem="center">
            <Typography>Basic information: name and email </Typography>
            <Stack direction="row" spacing ={2}>
                <Button variant="outlined" disabled>See</Button>
                <Button variant="outlined" disabled>Share</Button>
                <Button variant="outlined" onClick={handleClickOpen}>Mint</Button>
            </Stack>
        </Stack>
        <Divider sx={{ margin: 2}}/>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItem="center">
            <Typography>Your online existent profiles </Typography>
            <Stack direction="row" spacing ={2}>
                <Button variant="outlined" disabled>See</Button>
                <Button variant="outlined" disabled>Share</Button>
                <Button variant="outlined" disabled>Mint</Button>
            </Stack>
        </Stack>
        <Divider sx={{ margin: 2}}/>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItem="center">
            <Typography>Your Meyrs Brings test</Typography>
            <Stack direction="row" spacing ={2}>
                <Button variant="outlined" disabled>See</Button>
                <Button variant="outlined" disabled>Share</Button>
                <Button variant="outlined" disabled>Mint</Button>
            </Stack>
        </Stack>
        <Divider sx={{ margin: 2}}/>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItem="center">
            <Typography>Adverstisment preferences</Typography>
            <Stack direction="row" spacing ={2}>
                <Button variant="outlined" disabled>See</Button>
                <Button variant="outlined" disabled>Share</Button>
                <Button variant="outlined" disabled>Mint</Button>
            </Stack>
        </Stack>

        </Box>
              <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Minting new information about myself</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter information below so that it can be minted and stored in the blockchain. 
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Name"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                />

              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Mint</Button>
              </DialogActions>
            </Dialog>
            </>
    )
}

export default InfoMint;