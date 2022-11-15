import React from 'react'
import {Box,styled,IconButton,Checkbox, Typography,Stack} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({todo,deleteToDo,changeCompleted}) {

    const StyledBox=styled(Box)(
        ({theme})=>(
          {
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          width:"70%",
          backgroundColor:theme.palette.primary.dark,
          padding:"1%",
          margin:"1%",
          gap:"1%",
          borderRadius:"10px",
          [theme.breakpoints.down("sm")]:{
            width:"80%"
          }       
          }
        )
      )

      const StyledStack=styled(Stack)(
        ({theme})=>(
          {
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          [theme.breakpoints.down("md")]:{
            flexDirection:"column",
          }
          }
        )
        
      )
    
  return (
    <StyledBox>

        <Typography  m={2} sx={{
            // wordBreak: "break-all",
            color:"pink"}}>{todo.task}</Typography>
        <StyledStack >
            <IconButton  onClick={()=>deleteToDo(todo.id)}>
               <DeleteIcon color="primary" sx={{transform:{xs:"scale(0.6)",md:"scale(0.7)",lg:"scale(0.8)"} }}/>
            </IconButton>
            <Checkbox sx={{color:"pink", transform:{xs:"scale(0.5)",md:"scale(0.6)",lg:"scale(0.8)"},}} 
            checked={todo.completed} 
            onChange={()=>changeCompleted(todo.id)}/>
        </StyledStack>

    </StyledBox>
  )
}

export default Todo