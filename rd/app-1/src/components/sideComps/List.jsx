 import React from 'react'
 import Todo7 from './Todo7'
 
 function List(props) {

    let list = props.tasks.map((item, index) =>{
        return (
            <Todo7 key={index} task={item}/>
        )
    })

   return (
     <div>
         {list}
     </div>
   )
 }
 
 export default List