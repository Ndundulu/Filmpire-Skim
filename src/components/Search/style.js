import {styled, TextField} from '@mui/material'


export const StyledDiv = styled('div')(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },

}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInput-underline:before': {
        borderBottomColor: 'white', // Default underline white
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white', // Focused underline white
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'white', // Hover underline white
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '-10px',
      marginBottom: '10px',
    },
    color:'white',
  }));