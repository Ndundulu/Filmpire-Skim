import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

// === Movie Grid ===
export const StyleGrid = styled(Grid)(({ theme }) => ({
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: "20px",
  justifyItems: "center",
}));

// === Movie Title ===
export const TgTitle = styled('p')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '0.85rem',        // 👈 smaller, cleaner text
  fontWeight: 500,
  marginTop: '6px',           // 👈 small space below image
  marginBottom: '4px',
  textAlign: 'center',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
  lineHeight: 1.2,            // 👈 tighter vertical spacing
}));


// === Movie Poster Image ===
export const Styledimg = styled('img')(({ theme }) => ({
  borderRadius: '10px',
  width: '100%', // fits its grid cell perfectly
  height: 'auto',
  objectFit: 'cover',
  aspectRatio: '2 / 3', // keeps movie-poster shape
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',

  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 4px 12px rgba(255,255,255,0.1)'
        : '0 4px 12px rgba(0,0,0,0.2)',
  },
}));


// === Clickable Link Wrapper ===
export const Styledlink = styled(Link)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontWeight: "bolder",
  textDecoration: "none",
  width: "100%",
  "&:hover": {
    cursor: "pointer",
  },
}));
