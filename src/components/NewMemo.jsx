import React, { useEffect, useState } from "react"
import '../styles/NewMemo.scss';

import { TextField  } from '@mui/material'

const NewMemo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth - 150)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth - 150);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); //Empty dependency array - effect runs once after the initial render

  return (
    <div className="memo-textarea">
      <TextField
        id="filled-multiline-flexible"
        label="Write now, remember later!"
        multiline
        maxRows={40}
        variant="filled"
        sx={{
          width: windowWidth,
          margin: 1
        }}
      />
    </div>
  )
}

export default NewMemo;