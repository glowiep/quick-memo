import React, { useEffect, useState } from "react"

// Styling
import '../styles/CreateMemo.scss';

import { TextField  } from '@mui/material'

const CreateMemo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth * 0.85)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth * 0.85);
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
        maxRows={500}
        variant="filled"
        sx={{
          width: windowWidth,
          margin: 1
        }}
      />
      <button className="save-memo-btn">Add Memo</button>
    </div>
  )
}

export default CreateMemo;