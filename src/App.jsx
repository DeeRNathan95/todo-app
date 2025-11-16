import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import {useState, useEffect} from 'react'

function App() {
  // const todos = [
  //   {input: 'Hello! Add your first todo!', complete: true},
  //   {input: 'Get the groceries!', complete: false},
  //   {input: 'Learn how to web design!', complete: false},
  const [todos, setTodos] = useState([  //square bracket first param value, 2nd param is the set function.
  //   {input: 'Say hi to gran gran!', complete: true},
  // ]

//Use state is a react hook where react hooks adjusts functionality for manupulating or managing data or page.
      {input: 'Hello! Add your first todo!', complete: true}
    ])
    const [selectedTab, setSelectedTab] = useState('Open')

    function handleAddTodo(newTodo) {
      const newTodoList = [...todos, {input: newTodo, complete: false}]
      setTodos(newTodoList)
      handleSavedata(newTodoList)

    }

    function handleCompleteTodo(index) {
      // update/edit/modify todo at given index
      let newTodoList = [...todos]
      let completedTodo =  todos[index]
      completedTodo['complete'] = true
      newTodoList[index] = completedTodo
      setTodos(newTodoList)
      handleSavedata(newTodoList)


    }
    
    function handleDeleteTodo(index) {
      // delete todo at given index
      let newTodoList = todos.filter((val, valIndex) => {
        return valIndex !== index
      })
      setTodos(newTodoList)
      handleSavedata(newTodoList)

    }

    function handleSavedata(currTodos) {
      localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
    }

    useEffect(() => {
      if (!localStorage || !localStorage.getItem("todo-app")) // 
        {return} // checking if localStorage is available in the browser
        let db = JSON.parse(localStorage.getItem('todo-app')) // getting the data from localStorage
        setTodos(db.todos) // setting the data to the todos state
      }, [])

  return (
      <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab=
      {setSelectedTab} todos={todos} />
      <TodoList handleCompleteTodo = {handleCompleteTodo} handleDeleteTodo = {handleDeleteTodo} selectedTab={selectedTab}  todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
  </>
  )
}

export default App
