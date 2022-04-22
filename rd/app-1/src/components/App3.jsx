import React, {useState} from 'react'

function App3(props) {
    let list = ['pizza', 'tacos', 'sushi', 'burgers', 'burritos']
    const [filterArr, setFilterArr] = useState(list)

    function handleInput(event){
        console.log(event.target.value)

        let arrayFiltered = list.filter((item) => {
            if (item.toLowerCase().includes(event.target.value.toLowerCase())) {
                return item
            }
        })
        console.log(arrayFiltered)
        setFilterArr(arrayFiltered)
    }

  return (
    <div className='comps'>
        <h1>App3</h1>
        <input onChange={handleInput}/>
        {filterArr.map((item) =>{
        return(
            <p key={item}>{item}</p>
        )
      })}
    </div>
  )
}

export default App3