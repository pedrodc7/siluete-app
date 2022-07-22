import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from '@mui/material';

import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const InfoMint = () => {

    const [open, setOpen] = useState(false);
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');

    const handleClickOpen = (id) => {
      console.log("Click with ID:", id);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleMint = () => {
      // mint the stuff

      // build object
      const silAttribute = {
          "type": 1,
          "name": {name},
          "email": {email}
      };
      
      // encrypt object with private key

      // const objectDataString = JSON.stringify(silAttribute);
      // const ciphertext = CryptoJS.AES.encrypt(objectDataString, "123").toString();


      // create metadata and attribute with encypted stuff
      // actually mint it


      // wrap up
      setOpen(false)
    }

    const handleEmailChange = (event) => {
      setEmail(event.target.value)
    }

    const handleNameChange = (event) => {
      setName(event.target.value)
    }


    return (
      <>
        <Box sx={{ p: 2, border: '1px dashed grey' }} my={4}>
          <Typography variant="h4" yp={2}>
              Information items
          </Typography>
          {
            infoChoices.map (row => (
              <>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                  <Typography>{row.desciption}</Typography>
                    {
                      row.minted ?
                        <Stack direction="row" spacing ={2}>
                          <Button variant="outlined">See</Button>
                          <Button variant="outlined">Share</Button>
                          <Button variant="outlined" disabled>Mint</Button>
                        </Stack>
                      :
                        <Stack direction="row" spacing ={2}>
                          <Button variant="outlined" disabled>See</Button>
                          <Button variant="outlined" disabled>Share</Button>
                          <Button variant="outlined" onClick={handleClickOpen}>Mint</Button>
                        </Stack>

                    }
                </Stack>
                <Divider sx={{ margin: 2}}/>
              </>
            ))
          }
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            Minting new information about myself
          </DialogTitle>
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
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={handleEmailChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleMint}>Mint</Button>
          </DialogActions>
        </Dialog>
      </>
    )
}

// basic data structure that holds the data model for the information that is stored in siluete.
// the information itself is elsewhere (NFT, IPFS)
//
// this data strcuture can / should grow in two main directions:
// - actually include the fields that are relevant for each one of the information types (that would then be places in the dialog box, view box, etc)
// - refer to a possible integration from where the information would come from: for instance an external assessment.
//
// if an integration then the information will be meta information and accessed through some kind of api with the third party.
// However, once minted in siluete then we have to have a means of rendering it.


const infoChoices = [
  {
    id: 1,
    name: "basic",
    desciption: "Basic information: name and email",
    type: "native",
    minted: true
  },
  {
    id: 2,
    name: "profiles",
    desciption: "Your online existent profiles",
    type: "native",
    minted: false
  },
  {
    id: 3,
    name: "meyersbriggs",
    desciption: "Your Meyers Briggs test",
    type: "thirdp",
    minted: false
  },
  {
    id: 4,
    name: "advertisement",
    desciption: "Adverstisement preferences",
    type: "thirdp",
    minted: false
  },
]

export default InfoMint;