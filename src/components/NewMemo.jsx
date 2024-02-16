import React from "react"
import '../styles/NewMemo.scss';

import { Box, TextField  } from '@mui/material'

const NewMemo = () => {
  return (
    <div className="memo-textarea">
      <TextField
        id="filled-multiline-flexible"
        label="Add a quick memo, you'll thank yourself later!"
        multiline
        maxRows={40}
        variant="filled"
        sx={{width: '70ch'}}
      />
    </div>
  )
}

export default NewMemo;