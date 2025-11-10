export function Header(props) {
    const {todos} = props
    const isTasksPlural = todos.length === 1 ? 'task' : 'tasks'


    return (
        <header>
            <h1 className="text-gradient">
                You have {todos.length} open {isTasksPlural}.
            </h1>
        </header>
    )
}