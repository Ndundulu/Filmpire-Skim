import { Button, Drawer, styled } from "@mui/material";
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import useTheme from "@mui/material";

const drawerWidth = 240;

export const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: '#1976d2',
    color: "white",
}));

export const StyledToolbar = styled(Toolbar)(({theme}) => ({
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        flexWrap: 'wrap',
    }
}));

export const StyledIconButton = styled(IconButton)(({theme}) => ({
    marginRight: theme.spacing(2), 
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    }
}));

export const StyleIconbutton2 = styled(IconButton)(({theme}) => ({}));

export const StyledDrawerbg = styled(Drawer)(({ theme }) => ({
    "& .MuiDrawer-paper": {
        width: "240px",
        backgroundColor: "#f4f4f4",
        boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
        overflow: 'visible',
    },
    backgroundColor: "transparent",
}));

export const StyleNav = styled("nav")(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
    },
}));

export const linkButton = styled(Button)({
    "&:hover": {
        color: 'white !important',
        textDecoration: 'none',
    }
});

export const styleLink = styled(Link)({
    display: 'flex',
    justifyContent: "center",
    padding: '20px 0', // Reduced padding to ensure logo isn’t pushed too far down
    textDecoration: 'none',
    color: 'inherit',
    width: '100%',
});

export const styleImg = styled('img')({
    width: '70%',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    minHeight: '50px', // Ensure it has a visible height even if loading fails
});