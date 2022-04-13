import React, { useEffect, useState } from 'react'
import './BudgetBalance.css'

const BudgetBalance = (props) => {
    const [input, setInput] = useState(" ")
    const handleInput = (e) => {
        console.log(e)

        setInput(e.target.value)
    }

    useEffect(() => {
        console.log("i just MOUNTED @ Budget Balance")

        return () => {
            console.log("i just UNMOUNTED @ Budget Balance")

        }
    }, [props.balance])


    return (

        <
        div div className = "budgetBalance" >

        <
        div className = "balance" > { props.balance } < /div>

        <
        div className = "balance-button" >
        <
        input onChange = { handleInput }
        /> <
        button onClick = {
            () => props.setBalance(input)
        } > Update Balance < /button> < 
        div > <
        /div>
    )

}

export default BudgetBalance