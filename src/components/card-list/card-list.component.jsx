import React, { Component } from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'

export default class cardList extends Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {}
  }
  render() {
    console.log('render from cardList')
    const { monsters } = this.props
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          return <Card monster={monster} />
        })}
      </div>
    )
  }
}
//   return (
//     <div className='card-list'>
//       {monsters.map((monster) => { return (<CardContainer monster={monster} />)}
//        }
//     </div>
//   )
// }
// }
