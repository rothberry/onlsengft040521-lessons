import logo from "./logo.svg"
import "./App.css"
import React, { Component } from "react"
import MyDiv from "./MyDiv"

// FUNCTIONAL COMPONENT (Just retruns JSX)
// JSX
// Combo between Javascript and HTML
// Curly brackets evaluate as JS in JSX
// Similar to how we usedc string interpolation in a display func
// const App = () => {

//   return (
//     <>
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className='App-link'
//             href='https://reactjs.org'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             Learn React
//           </a>

//           <h1>{1 + 1}</h1>
//         </header>
//       </div>
//     </>
//   )
// }

// CLASS COMPONENT

// import React from "react"
// which gives us the entire react library

// make new li tags for each person in array?
const names = "phil joel mike brinton christine".split(" ")

class App extends Component {
  // mapNames() {
  //   return names.map((name) => {
  //     return <li>name</li>
  //   })
  // }
  render() {
    // console.log(mappedNames)
    return (
      <>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            {/* <MyDiv name={names[4]} isCool={true} /> */}
            <ul>
              {names.map((name) => (
                <MyDiv name={name} isCool={true} />
              ))}
              {/* similar process the looping and appending data (or li tags) */}
            </ul>
          </header>
        </div>
      </>
    )
  }
}

// PROPS
// Properties object that can be passed down from component to component

// class MyDiv extends Component {
//   render() {
//     return <div>It's Phil!</div>
//   }
// }

export default App
