import React from "react";
import MemoListItem from "./MemoListItem";

import { Stack } from '@mui/material';

// Styling
import '../styles/MemoList.scss'

import memoData from '../mocks/memoData.js';

const MemoList = () => {
  const memoItem = memoData[0];
  return(
  <div className="memo-list">
    <Stack direction="row" justifyContent="center"  spacing={2} useFlexGap flexWrap="wrap">
      <MemoListItem memoItemData={memoItem.memo}/>
      <MemoListItem memoItemData={memoItem.memo}/>
      <MemoListItem memoItemData={memoItem.memo}/>
    </Stack>
  </div>
  )
}

export default MemoList;