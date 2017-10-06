import React from 'react'
import Perf from 'react-addons-perf'
import { convertNumberToEnglish, createRange } from '../../utils'
import Todo from './Todo'

const NUM_ITEMS = 2000

let guid = 0

class TodoList extends React.Component{
  constructor() {
    super()
    this.guid = 0
    this.state = {
      items: createRange(NUM_ITEMS).map(n => ({
         key: ++this.guid,
         text: convertNumberToEnglish(n + 1),
         isDone: Math.random() < 0.5
       }))
    }
  }

  updateItem = (item, isDone) => {
     item.isDone = isDone

     Perf.start()

     this.forceUpdate(() => {
       Perf.stop()
       //Perf.printWasted()
       Perf.printInclusive()
     })
   }

   handleSubmit = (e) => {
     e.preventDefault()

     const item = {
       key: ++this.guid,
       text: e.target.elements[0].value,
       isDone: false
     }

     e.target.reset()

     Perf.start()

     this.setState({
       items: [ item ].concat(this.state.items)
     }, () => {
       Perf.stop()
       //Perf.printWasted()
       Perf.printInclusive()
     })
   }

   componentDidMount() {
     this.input.focus()
   }

   render() {
     return (
       <div>
         <form style={{ paddingTop: '20px', paddingBottom: '10px' }} onSubmit={this.handleSubmit}>
           <h2>Todo 2 ({NUM_ITEMS} items)</h2>
           <h3>New task</h3>
           <input ref={ node => this.input = node } className="form-control"/>
         </form>
         <ul className="list-unstyled">
           {this.state.items.map(item => (
             <Todo
               key={item.key}
               text={item.text}
               isDone={item.isDone}
               onChange={isDone => this.updateItem(item, isDone)}
             />
           ))}
         </ul>
       </div>
     )
   }
}

export default TodoList
