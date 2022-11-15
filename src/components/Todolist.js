import {React} from 'react'
import {Box,styled} from '@mui/material';
import Todo from './Todo';



function Todolist({todos,deleteToDo,changeCompleted}) {


    const StyledBox=styled(Box)(
        ({theme})=>(
          {
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          width:"70%",
          backgroundColor:theme.palette.primary.light,
          margin:"1%",
          gap:"1%",
          borderRadius:"10px",
          borderStyle: "dotted",
          borderColor:theme.palette.primary.dark,
          borderWidth:todos.length==0?"0px":"5px",
          [theme.breakpoints.down("sm")]:{
            width:"80%",
          }
          }
        )
      )


    let renderdList=todos.map(
        (todo)=>
        <Todo key={todo.id} todo={todo} deleteToDo={deleteToDo} changeCompleted={changeCompleted}/>
        )

  return (
    <StyledBox>
        {renderdList}
    </StyledBox>
  )
}

export default Todolist