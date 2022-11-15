// import logo from './logo.svg'
import './App.css'
import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      monsters: [],
      searchString: '',
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  onSearchInput = (event) => {
    console.log(event.target.value)
    const searchString = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchString }
    })
  }

  render() {
    console.log('render')
    const { monsters, searchString } = this.state
    const { onSearchInput } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString)
    })

    return (
      <div className='App'>
        <h1 className='app-title'>Monster Rolodex</h1>

        <SearchBox
          onChangeHandler={onSearchInput}
          placeholder='Search Monster'
          className='monster-search-box'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
