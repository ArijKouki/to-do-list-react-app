import {React,useState} from 'react'
import Todoform from "./Todoform";
import Todolist from "./Todolist";
import {Box,createTheme,styled,ThemeProvider, Toolbar, Typography,AppBar} from '@mui/material';


const StyledBox=styled(Box)(
    {
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    } 
)


function App() {

  const theme=createTheme(
    {
      palette:{
        primary:{
          main:"#ffafcc",
          light:"#ffc8dd",
          dark:"#ff7aa2",
          contrastText:"#ff477e"
        }
      },
      typography: {
        fontFamily: [
          'Carattere',
          "Alex Brush",
        ].join(','),
      }
    }
  )


  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function deleteToDo(id){
    let ar=todos
    for( var i = 0; i < todos.length; i++){ 
      if ( todos[i].id === id) { 
          ar.splice(i, 1); 
          setTodos([...ar]);
      }
    }

  }
 
  function changeCompleted(id) {
    let ar=todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    }
    );
    setTodos([...ar])
  }

  return (
    <ThemeProvider theme={theme}>
    <StyledBox>

      <AppBar position="sticky">
        <Toolbar>
        <Typography 
          color={theme.palette.primary.dark} 
          sx={{ typography: { xs: 'h6',sm: 'h5',md:"h4" ,lg:"h3" } }}>
          My To-Do List
          {/* Notes */}
          </Typography>
        </Toolbar>
      </AppBar>

      <Todoform addTodo={addTodo}/>

      <Todolist todos={todos} deleteToDo={deleteToDo} changeCompleted={changeCompleted}/>
    </StyledBox>
    </ThemeProvider>
  );
}

export default App;
