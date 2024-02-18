import React from "react";
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const MemoPaper = styled(Paper)(({ theme }) => ({
  width: 300,
  height: 200,
  padding: theme.spacing(4),
  ...theme.typography.body2,
  textAlign: 'left',
}));

const MemoListItem = (props) => {
  return (
    <MemoPaper square={false} elevation={6}>
      {props.memoItemData}
    </MemoPaper>
  )
}

export default MemoListItem;