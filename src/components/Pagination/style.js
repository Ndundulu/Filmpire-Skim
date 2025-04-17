import { Button, styled, Typography} from "@mui/material"

export const Container = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

}))

export const ButtonStyling = styled(Button)((theme) => ({
    margin: '30px 2px',
}))

export const Typostyling = styled(Typography)(({theme}) => ({
    margin: '0 20px !important',
    color: theme.palette.text.primary,
}))