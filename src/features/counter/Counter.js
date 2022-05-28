import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

const Counter = () => {
    const count= useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()

    const [incrementAmount, setIncrementAmount]=React.useState(0)

    const addValue=Number(incrementAmount)||0

    const reserAll=()=>{
        setIncrementAmount(0);
        dispatch(reset())
    }
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            {/* <button onClick={()=>dispatch(reset())}>reset</button> */}
        </div>
        <input type="text" value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}></input>
        <div>
            <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={reserAll}>Reset</button>
        </div>
    </section>
  )
}

export default Counter