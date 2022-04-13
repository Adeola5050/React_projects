// import Logo from "./components/Logo";
// import Budget from "./Budget"
import React from 'react'
import Authentication from './Authentication'
import './MyApp.css'



function App() {

  return(
    <div className="app-container">
       {/* <Budget/> */}
        <Authentication/>

    </div>
    );
  }

  export default App;

//   const links=[
//     {
//       buttonName: 'Reviews',
//     },
//     {
//       buttonName: 'Tips',
//     },
//     {
//       buttonName: 'Alerts',
//     },
//     {
//       buttonName: 'Blog',
//     }

//   ]

//   const signIn =[
//     {
//       buttonName: "Sign In"
//     }

//   ]
  
//   return (
//     <div className="app-container">
//            <div className="header-container">
// //         <div className="header">
// //           <div>
// //           <Logo/>
// //          </div>
// //          <div style={{width: "50%", paddingRight: "25px", display: "flex", justifyContent: "center"}}>
// //            {links.map((link) => <button style={{marginRight: "10px"}}>{link.buttonName}</button>)}
// //            </div>
// //              <div style={{ paddingRight: "20px", display: "flex"}}>
// //            {signIn.map((link)=> <button style={{marginRight:"10px"}}>{link.buttonName}</button>)}
// //            </div>
// //            </div>
// //            <div className="main-text-holder">
//             <h1>Discover A beautiful place with us</h1>
//          </div>
//        </div>
//     </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
//  );}


// export default App


// import Task from "./components/Task";


// const App =() => {
//   return(
//     <>
//     <Task name="Task 1"/>
//     <Task desc="Do Something"/>
//     <Task call="Learn React"/>
//     </>
//   );
// };




//  export default App