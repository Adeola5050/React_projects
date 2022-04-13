// import {type} from "@testing-library/user-event/dist/type";import React from 'react'; 
 import React from 'react';
import ReactDOM from 'react-dom';
 import './index.css'
//  import MyApp from './MyApp'
import App from './App'


// ReactDOM.render(<App />, document.querySelector('#root'))

// const App = ()=> {
//   const text="Hello world"
//   return (
//       <>
//   <label class = "name-label" for="name"> Name: </label>
//    <input id="name" type="text" name="name"/>
//    <button style={{backgroundColor: 'blue', color: 'white'}} >Click Me
//    </button>
//   </>
//  );

// }

ReactDOM.render( 
   <React.StrictMode>
         <App/>,

   </React.StrictMode>,
   // document.getElementById('#root')

  document.getElementById('root'));     

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// 



