import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import reduxThunk from "redux-thunk"
import reducers from "./redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Home"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
)

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App
