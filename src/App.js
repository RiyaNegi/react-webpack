import React from "react"
import Form from "./Form"

function App() {
    return (<div>
        <h1>Welcome to React App</h1>
        <h3>Date : {new Date().toDateString()}</h3>
        <Form />
    </div>)
}

export default App