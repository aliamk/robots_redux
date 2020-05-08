import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList'
// import {robots} from './robots'
import ErrorBoundary from '../components/ErrorBoundary'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'
import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: []
  //     // searchfield: ''
  //   }
  // }

  componentDidMount() {
    // console.log(this.props.store.getState()) // See App.js for store as a prop
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({ robots: users }))
    this.props.onRequestRobots()
  }

  // Replaced with Redux props
  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    // if (robots.length === 0) 
    return isPending ?
      <h1 className='tc'>Loading...</h1> :
    (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
    )
  }
}

// 'connect' is a 'higer-order function', which are functions that return other functions
/* App is now aware of existence of redux, and is looking to mapStateToProps for state 
changes and to mapDispatchToProps for action changes
*/
export default connect(mapStateToProps, mapDispatchToProps)(App)

/*
  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
      <h1 className='tc'>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
    )
  }
}

*/