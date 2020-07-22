// import the react and react dom libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create a react component
const App = () => {
    const buttonText = {text: 'clickme'}
    return (
        <div>
            <label htmlFor="name" className='label'>
                Enter Name:
            </label>
            <input type="text" id="name"/>
    <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>
    )
}


// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)