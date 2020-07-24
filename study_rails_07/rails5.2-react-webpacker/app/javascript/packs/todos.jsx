import React from 'react'

class Todos extends React.Component {
    render() {
        const { todos } = this.props
        return (
            <ul className="list-group">
                {todos.map(todo => <li key={todo} className="list-group-item">{todo}</li>)}
            </ul>
        )
    }
}

export default Todos;
