import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "./redux/example/action"

const Home = () => {
    const exampleStore = useSelector((state) => state.example)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(add())}>
                {exampleStore.count}
            </button>
        </div>
    )
}

export default Home
