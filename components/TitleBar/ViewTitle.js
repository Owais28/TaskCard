import { Box, Link, Typography } from '@mui/material'
import React from 'react'

export const ViewTitle = ({title='Undefinded', link='/'}) => {
  return (
    <Box
    display={'flex'}
    alignItems='center'
    paddingX='18px'
    >
      <Typography flex={1} fontSize='small' fontWeight={'bold'}>
        {title}
      </Typography>
      <Link underline='none' href={link}>
      <Typography fontSize={'small'} color='primary'>
        See All
      </Typography>
      </Link>
    </Box>
  )
}
