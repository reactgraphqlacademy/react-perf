import React from 'react'

class Todo extends React.Component{

  handleChange = e => {
    this.props.onChange(e.target.checked)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.text !== this.props.text || nextProps.isDone !== this.props.isDone
  }

  render() {
    const { text, isDone } = this.props

    return (
      <li className="media" style={{ borderBottom: '1px solid #ccc' }}>
         <div className="media-left">
         </div>
         <div className="media-body">
           <h4 className="media-heading">{isDone ? 'done' : 'todo'} - {text}</h4>
           <div className="checkbox"> <label> <input checked={isDone} type="checkbox" onChange={this.handleChange}/> done </label> </div>
         </div>
         <div className="media-right">
            <figure>
              <img alt="64x64" className="media-object" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWEyYTJjZWIzMiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1YTJhMmNlYjMyIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" style={{width: '64px', height: '64px'}} />
            </figure>
         </div>
       </li>
    )
  }
}

Todo.propTypes = {
  text: React.PropTypes.string.isRequired,
  isDone: React.PropTypes.bool.isRequired,
}

export default Todo
