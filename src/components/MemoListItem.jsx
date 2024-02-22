import React, { useEffect } from "react";
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

import useApplicationData from "../hooks/useApplicationData";
import { useAppContext } from "../contexts/AppContext";
// Styling
import '../styles/MemoListItem.scss';

const MemoPaper = styled(Paper)(({ theme }) => ({
  width: 300,
  minHeight: 180,
  padding: theme.spacing(4),
  ...theme.typography.body2,
  textAlign: 'left',
  whiteSpace: "pre-wrap"
}));

const MemoListItem = (props) => {
  const { deleteMemo, copyMemo } = useApplicationData();
  const { state, setState } = useAppContext();

  useEffect(() => {
    const localMemoData = window.localStorage.getItem('memoData');
    const parsedMemoData = localMemoData ? JSON.parse(localMemoData) : window.localStorage.setItem('memoData', JSON.stringify(state.memoData));
    
    // Set memoData in state
    setState((prevState) => ({
      ...prevState,
      memoData: parsedMemoData 
    }))
  }, [])

  return (
    <div className="memo-item-div">
      <MemoPaper square={false} elevation={6}>
        {props.memoItemData}
      </MemoPaper>
      <div className="memo-actions">
        {/* <BorderColorRoundedIcon 
          onClick={()=>console.log("edit icon clicked")}
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
        /> */}
        <ContentCopyIcon
          onClick={() => copyMemo(props.id)} 
          fontSize="small"
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
        />
        <DeleteRoundedIcon 
          onClick={() => deleteMemo(props.id)} 
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
        />
      </div>
      <span id="copied-memo-span">{state.isCopied ? "Copied to clipboard!" : ""}</span>
    </div>
  )
}

export default MemoListItem;