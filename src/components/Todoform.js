import {React,useState} from 'react'
import {TextField,Button,Box,styled} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';


const StyledBox=styled(Box)(
    ({theme})=>(
      {
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      width:"70%",
      height:"90px",
      backgroundColor:theme.palette.primary.light,
    //   padding:"1%",
      margin:"5% 0 0 0",
      gap:"1%",
      borderRadius:"10px",
      borderStyle: "dotted",
      borderColor:theme.palette.primary.dark,
      borderWidth:"5px",
      [theme.breakpoints.down("sm")]:{
        width:"80%",
      }
      }
    )
    
  )



function Todoform({addTodo}) {

    const [todo, setTodo] = useState(
        {
            id: "",
            task: "",
            completed:false
        }
    )

    

    function handleClick(e){
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
    }

    function handleKeyDown (e) {
        if (e.key === 'Enter') {
          handleClick(e)
        }
    };

  return (
    <StyledBox>
        <TextField sx={{width:"60%",input: { color: "#ff7aa2" }}} 
        value={todo.task} 
        onChange={(e)=>setTodo({...todo,task:e.target.value})} 
        onKeyDown={(e)=>handleKeyDown(e)}/>
        <Button variant="contained" onClick={(e)=>handleClick(e) } >Add</Button>
    </StyledBox>
  )
}

export default Todoform;