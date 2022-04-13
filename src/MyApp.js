import React from 'react'
import './MyApp.css'
import ProfileCard from './components/ProfileCard';

const MyApp =() =>{
    return (
        <div className="myapp-container">

        <ProfileCard username ="Olori" hobby="sleeping"/>
        <ProfileCard username ="Esther" hobby="singing"/>

        {/* <MyButton buttonName="Tolu" color="white " backgroundColor="green" />
        <MyButton buttonName="Lotachi" color="black" backgroundColor="yellow"/>
        <MyButton buttonName= "Adeola" color="white" backgroundColor="red" /> */}

     </div>
    )
}


export default MyApp;