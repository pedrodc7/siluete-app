import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

const History = () => {
    return (
        <Box sx={{ p: 2, border: '1px dashed grey' }} my={4}>
        <Typography variant="h4">
            Usage history
        </Typography>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Information</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell>With</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map( row => (
                            <TableRow 
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.info}</TableCell>
                                <TableCell>{row.action}</TableCell>
                                <TableCell>{row.with}</TableCell>
                                <TableCell>{row.onData}</TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>

        </Box>
    )
}

const tableData = [
    {
        id: 1,
        info: "Basic info",
        action: "Minted",
        with: "",
        onData: "1/6/2022",
    },
    {
        id: 2,
        info: "Basic info",
        action: "Shared",
        with: "email@abc.com",
        onData: "1/7/2022",

    },
    {
        id: 3,
        info: "Meyers Briggs",
        action: "Minted",
        with: "",
        onData: "4/7/2022",
    }
];  

export default History;