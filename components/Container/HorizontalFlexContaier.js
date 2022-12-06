import React from 'react'
import { Box } from '@mui/material'

export const HorizontalFlexContaier = ({children}) => {
  return (
    <Box display={'flex'}  flex={1} overflow='scroll' 
        // height={'450px'}
        paddingY={3}
        paddingX={'18px'}
        className={'horizontal_flex_container'}
        >
          {children}
    </Box>
  )
}
