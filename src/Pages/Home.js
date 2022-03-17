import React from 'react'
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ py: 5 }}>
      <div>
        <img src='https://source.unsplash.com/random' width='100%' height='100%' style={{ objectFit: 'cover' }} alt="dg" />
      </div>
    </Box>
  )
}

export default Home;