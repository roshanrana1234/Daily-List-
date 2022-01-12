import React from "react";
import { Avatar, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { makeStyles } from "@mui/styles";
import { blue, green, orange, yellow } from "@mui/material/colors";

const useStyles = makeStyles({
  avatar:{
    background:(note) => {
      if (note.category == 'work'){
        return yellow[700]
      }
      if (note.category == 'money'){
        return green[500]
      }
      if (note.category == 'todos'){
        return orange[500]
      }
      return blue[500]
    }
    }
  
})


const NoteCard = ({ note, handleDelete  }) => {
  const classes = useStyles(note);
  return (
    <>
      <Card elevation={2}  >
        <CardHeader
        avatar = {
          <Avatar className = {classes.avatar} >
            {note.category[0].toUpperCase()}
          </Avatar>
        }
          action={
            <IconButton onClick={()=>handleDelete(note.id)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary">
                {note.details}
            </Typography>
        </CardContent>
      </Card>
      {/* {note.title} */}
    </>
  );
};

export default NoteCard;
