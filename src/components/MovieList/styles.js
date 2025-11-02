import React from "react"
import { styled } from "@mui/material"
import {Grid2} from '@mui/material'


export const StyledGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)', // 👈 exactly 6 columns
  gap: '16px',
  justifyItems: 'center',
  width: '100%',
  margin: '0 auto',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 per row on tablets
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 per row on phones
  },
}));
