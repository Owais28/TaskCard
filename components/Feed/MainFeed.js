import { Box } from '@mui/system'
import React from 'react'

export const MainFeed = ({ children }) => {
  return (
    <Box
      sx={
        {
          padding: '20px 18px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          rowGap: '25px'
        }
      }>
      {children}
    </Box>
  )
}
