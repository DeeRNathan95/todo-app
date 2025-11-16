import { useState } from "react"

export function TodoInput(props) {
        const {handleAddTodo} = props
        const [inputValue, setInputValue] = useState("")

    return(
        <div className="input-container">
            <input value={inputValue} onChange={(e) => {        // onChange event to capture user input
                setInputValue(e.target.value) // updating the input value as user types
            }}
             placeholder="Add task" /> 
            <button onClick={()=> { // click event for the button
               if (!inputValue) {return} // to prevent adding empty todos
               handleAddTodo(inputValue) // calling the function from App.jsx, adding the value
               setInputValue("") // clearing the input field after adding   
            }}>
                <i className="fa-solid fa-plus"></i> ADD
            </button>
                 

        </div>
    )
}