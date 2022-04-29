import React from 'react'

function Todo6(props) {
    let display = props.display
  return (
    <div>
        {display.map((item) =>{
            return(
                <p key={item}>{item}</p>
            )
          })}
    </div>
  )
}

export default Todo6