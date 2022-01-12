import React,{useState} from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Radio,RadioGroup,FormControlLabel,FormControl,FormLabel } from "@mui/material";
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  sum: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "block",
    // display:"flex"
    
  },
});

const Create = () => {
  const classes = useStyles();
  const navigate = useNavigate()

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault();
      setTitleError(false)
      setDetailsError(false)
if (title == ''){
    setTitleError(true)
}

if (details == ''){
    setDetailsError(true)
}
      if (title && details){
         fetch('   http://localhost:8000/notes',{
             method:'POST',
             headers:{"content-type":"application/json"},
             body:JSON.stringify({title, details,category})
         }).then(()=>navigate('/'))
      }
  }
  return (
    <>
      <Container >
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create A Note
        </Typography>

        {/* noValidate  means we dont want to use you in built validate messages*/}
        <form noValidate autoComplete="off" className={classes.root} onSubmit={handleSubmit} >
          <Box my={3}>
            <TextField
              onChange={(e)=>setTitle(e.target.value)}
              variant="outlined"
              label="Note Title"
              fullWidth
              required
              error={titleError}
            />
            {/* required ={we required detail in this is must} */}
          </Box>
          <Box my={3} >
          <TextField
          onChange={(e) => setDetails(e.target.value)}
            multiline
            rows={4}
            variant="outlined"
            label=" Details"
            fullWidth
            required
            error={detailsError}
          />
          </Box>

          <FormControl className={classes.sum}>
      <FormLabel>Note Category</FormLabel>
      <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)} >
        <FormControlLabel value="Money" control={<Radio />} label="Money" />
        <FormControlLabel value="ToDo" control={<Radio />} label="ToDo" />
        <FormControlLabel value="Reminder" control={<Radio />} label="Reminder" />
        <FormControlLabel value="Work" control={<Radio />} label="Work" />
      </RadioGroup>
    </FormControl> <br /><br />

        <Button
          endIcon={<KeyboardArrowRightOutlinedIcon />}
          type="submit"
          color="secondary"
          variant="contained"
        >
          Submit
        </Button>
        </form>
      </Container>
    </>
  );
};

export default Create;
