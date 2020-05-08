import React, { Component } from 'react'

/* Wrap any component, such as CardList, with this ErrorBoundary component in order to catch 
any potential errors within that component inside of React */ 

class ErrorBoundary extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      hasError: false
    }
  }

  // This react lifecycle hook is like the try-catch block in JS
  // If there is an error and hasError = true, this hook will run
  componentDidCatch(error, info) { 
    this.setState({ hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooooops, that is not good</h1>
    }
    return this.props.children //children refers to any component within the ErrorBoundary component wrapper
  }
}


export default ErrorBoundary