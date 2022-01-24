import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@material-ui/core';

export default function Footer() {
    return (
        <>
            <Box style={{ backgroundColor: "black",marginTop:"10px"}}>
                <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Box style={{ color: "white", paddingTop: "10vh", paddingBottom: "10vh", paddingLeft: "10vh" }}>
                        © Shopclub - Suraj Thapliyal
                    </Box>
                    <Box style={{ color: "white", paddingTop: "5vh", paddingBottom: "10vh", paddingRight: "5vh", display: "flex", flexDirection: "column" }}>
                        <Box>  <AlternateEmailIcon />  surajthapliyal18@gmail.com
                        </Box>
                        <Box>  <InfoIcon /> Suraj Thapliyal
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}