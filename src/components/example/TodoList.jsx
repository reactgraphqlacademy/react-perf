import React from 'react'
import Perf from 'react-addons-perf'
import Todo from './Todo'

const NUM_ITEMS = 2000

let guid = 0

const _items = []
for (let i = 0; i < NUM_ITEMS; i++)
  _items.push({ id: ++guid, text: `item ${guid}` })

class TodoList extends React.Component{
  constructor() {
    super()
    this.state = {
      items: _items
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    const item = {
      id: ++guid,
      text: e.target.elements[0].value
    }

    e.target.reset()
    Perf.start()

    this.setState({
      items: [ item, ...this.state.items]
    }, () => {
      Perf.stop()
      //Perf.printWasted()
      Perf.printInclusive()
    })
  }

  render() {
    return (
      <div>
        <form style={{ paddingTop: '20px', paddingBottom: '10px' }} onSubmit={this.handleSubmit}>
          <h2>Todo 1 ({NUM_ITEMS} items)</h2>
          <h3>New task</h3>
          <input ref="input" className="form-control"/>
        </form>
        <ul className="list-unstyled">
          {this.state.items.map(item => (
            <Todo key={item.id} text={item.text}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList
