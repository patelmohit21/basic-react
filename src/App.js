import React from 'react'
import './App.css';
import Theme from './Components/Theme';
import { ThemeProvider } from './ThemeContext';
import ThemeComp from './Components/ThemeComp'
// import Searchbar from './Components/Searchbar';
// import Hamburger from './Components/Hamburger';
// import Weather from './Components/Weather';
// import Uploader from './Components/Uploader';
// import Thirteen from './Components/Thirteen';
// import Ten from './Ten';

// import Five from './five'
// import One from './Components/one';
// import Two from './Components/two'
// import Three from './three'
// import Four from './Components/four'
// import Six from './six'
// import Seven from './Components/seven';
// import Eight from './Components/Eight';
// import Nine from './Components/Nine';
// import Eleven from './Components/Eleven';




export default function App() {

  // const items = ['Item 1', 'Item 2', 'Item 3', 'Another item']
  return (
    <div className='app'>
      {/* <One /> */}
      {/* <Two /> */}
      {/* <Three /> */}
      {/* <Four /> */}
      {/* <Five /> */}
      {/* <Six /> */}
      {/* <Seven /> */}
      {/* <Eight /> */}
      {/* <Nine /> */}
      {/* <Ten/> */}
      {/* <Eleven /> */}
      {/* <Uploader /> */}
      {/* <Thirteen /> */}
      {/* <Weather /> */}
      {/* <Searchbar items={items}/> */}
      {/* <Hamburger /> */}
      <ThemeProvider>
      <div className='App'>
      <Theme />
      <ThemeComp />
      </div>
      </ThemeProvider>
    </div>
  )
}
