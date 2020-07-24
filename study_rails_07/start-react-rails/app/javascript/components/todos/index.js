import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        Todos: {this.props.todos}
        - first: {this.props.todos[0]}
        - second: {this.props.todos[1]}
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  todos: PropTypes.array
};
export default Index
