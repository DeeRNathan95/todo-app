export function Tabs() {

    const tabs = ['All', 'Open','Completed']
    return(
        <nav>
            {tabs.map((tab, tabIndex) => { //first parameter is the current value of the array. Second parameter is the index of the array, Third which is optional is the whole array.
                return (
                    <button key={tabIndex}>
                        <h4>{tab}</h4> 
                        </button>
                )
            })}
    
        </nav>
    )
}