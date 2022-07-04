import { Box, Typography } from "@mui/material";

const Intro = () => {
    return (
        <Box sx={{ p: 2, border: '1px dashed grey' }}>
                <Typography  variant="h3">
                    siluette app
                </Typography>
                <Typography>
                    Mint new information, share information with trusted entities, track the whole things here
                </Typography>
        </Box>
    )
}

export default Intro;
