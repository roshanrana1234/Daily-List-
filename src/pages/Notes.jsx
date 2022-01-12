import React, { useState, useEffect } from "react";
import { Grid,Paper,Container } from "@mui/material";
import NoteCard from "../component/NoteCard";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("  http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  const handleDelete = async (id) =>{
      await fetch( ' http://localhost:8000/notes'+ id,{
          method:"DELETE"
      })
      const newnotes = notes.filter(note=> note.id != id)
      setNotes(newnotes)
  }
  return (
    <>
    <Container>
    <Grid container spacing={2} >
      {notes.map(note => (
        <Grid item key={note.id} lg={4} xs ={12} md={6} >
       <NoteCard note={note} handleDelete={handleDelete} />
       </Grid>
      ))}
    </Grid>
    </Container>
  
    </>
  );
};

export default Notes;
