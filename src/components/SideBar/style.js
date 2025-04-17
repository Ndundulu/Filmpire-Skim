import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyleLink = styled(Link)({
  display: 'flex',
  justifyContent: "center",
  padding: '10% 0',
});

export const StyleImg = styled('img')({
  width: '70%',
  backgroundColor: 'transparent'
});

export const GenreImages = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none', // More explicit
}));

export const DcLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));