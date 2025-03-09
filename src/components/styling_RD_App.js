
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import {useMediaQuery} from "@mui/material";




//Styled component of the root container
export const Root = styled(Box)(() => ({
    display: "flex",
    height:'100%',
    flexDirection: 'column'
}));

//Styled component for the main containter area
// export const Main = styled('main')(()=>({
//     flexGrow: 1, 
//     padding: '80px 16px 24px 16px',// Consistent padding
//     width: '100%', 
//     maxWidth: '1200px', // Optional cap
//     marginLeft: 'auto', // Center or align with Drawer
//     marginRight: 'auto',
    
// }));

export const Div = styled('div')(() => ({
    height: '70px',
}))

