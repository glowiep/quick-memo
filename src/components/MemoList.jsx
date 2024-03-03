import React, { useEffect } from "react";
import MemoListItem from "./MemoListItem";
import { useAppContext } from "../contexts/AppContext";
import { Stack } from '@mui/material';

// Styling
import '../styles/MemoList.scss'

const MemoList = () => {
  const { state } = useAppContext();
  const memoData = state.memoData;
  return(
  <div className="memo-list">
    <Stack direction="row" justifyContent="center"  spacing={2} useFlexGap flexWrap="wrap">
      {memoData && memoData.map((memo, index) => (
        <MemoListItem key={memo.id} id={memo.id} memoItemData={memo.memo}/>
      ))}
    </Stack>
  </div>
  )
}

export default MemoList;