export function Tabs() {

    const tabs = ['All', 'Open','Completed']
    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => { //first parameter is the current value of the array. Second parameter is the index of the array, Third which is optional is the whole array.
                return (
                    <button key={tabIndex}
                    className="tab-button">
                        <h4>{tab} <span>(0)
                            </span></h4> 
                        </button>
                )
            })}
    
        </nav>
    )
}