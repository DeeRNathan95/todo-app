export function Tabs(props) {
    const {todos, selectedTab, setSelectedTab} = props
    const tabs = ['All', 'Open','Completed']
    
    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => { //first parameter is the current value of the array. Second parameter is the index of the array, Third which is optional is the whole array.
               const numofTasks = tab === 'All' ?
               todos.length :
               tab === 'Open' ?
                todos.filter(val => !val.complete).
                length : 
                todos.filter(val => val.complete).length
                 // filter() method check each item to pass the test
               
               return (
                    <button onClick={() => {
                        setSelectedTab(tab)
                    }} key={tabIndex} className={"tab-button "
                    + (tab === selectedTab ? ' tab-selected' : ' ')}> 
                        <h4>{tab} <span>({numofTasks})</span>
                        </h4> 
                        </button>
                )
            })}
            <hr />
    
        </nav>
    )
}