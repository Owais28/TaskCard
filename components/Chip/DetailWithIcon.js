import React from 'react'
import { Box, Typography } from '@mui/material'

export const DetailWithIcon = ({ icon, info }) => {
  return (
    <Box display={'flex'} alignItems='center' color={'rgb(0,0,0,0.7)'}>
      <Box sx={
        {
          marginRight: 0.75,
          display: 'flex',
          alignItems: 'center'
        }
      }>
        {icon}
      </Box>
      <Typography variant='body2' fontSize={'13px'} fontFamily={'Rubik'} color={'rgb(0,0,0,0.7)'}>
        {info}
      </Typography>
    </Box>
  )
}
