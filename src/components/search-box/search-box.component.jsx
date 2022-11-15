import React, { Component } from 'react'
import './search-box.styles.css'

export default class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props
    return (
      <input
        type='search'
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    )
  }
}
