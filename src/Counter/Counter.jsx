import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/CounterSlice'

function Counter() {
    //if you need to take data from slice then use useSelector hook

    const count = useSelector(state =>
        state.counter.value
    )
    //use dispatch is used for call actions
    const dispatcher = useDispatch()

    return (
        <div style={{
            fontSize: '20px',
            display: 'flex',
            backgroundColor: "gray",
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>

            <button onClick={() => dispatcher(increment())}>Increment</button>

            <div>Counter:{count}</div>
            <button onClick={() => dispatcher(decrement())}>
                decremment</button>
        </div>
    )
}

export default Counter