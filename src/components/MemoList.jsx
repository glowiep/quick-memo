import React from "react";
import MemoListItem from "./MemoListItem";

import { Stack } from '@mui/material';

// Styling
import '../styles/MemoList.scss'

import memoData from '../mocks/memoData.js';

const MemoList = () => {
  return(
  <div className="memo-list">
    <Stack direction="row" justifyContent="center"  spacing={2} useFlexGap flexWrap="wrap">
      {memoData.map((memo, index) => (
        <MemoListItem key={index} memoItemData={memo.memo}/>
      ))}
    </Stack>
  </div>
  )
}

export default MemoList;