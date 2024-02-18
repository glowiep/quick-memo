import React from "react";
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

// Styling
import '../styles/MemoListItem.scss';

const MemoPaper = styled(Paper)(({ theme }) => ({
  width: 300,
  minHeight: 200,
  padding: theme.spacing(4),
  ...theme.typography.body2,
  textAlign: 'left',
}));

const MemoListItem = (props) => {
  return (
    <div className="memo-item-div">
      <MemoPaper square={false} elevation={6}>
        {props.memoItemData}
      </MemoPaper>
      <div className="memo-actions">
        <BorderColorRoundedIcon onClick={()=>console.log("edit icon clicked")}/>
        <DeleteRoundedIcon onClick={()=>console.log("delete clicked")}/>
      </div>
    </div>
  )
}

export default MemoListItem;